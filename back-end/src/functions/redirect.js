const { app } = require('@azure/functions');
const { CosmosClient } = require('@azure/cosmos')

const connectionString = process.env.COSMOS_DB_CONNECTION_STRING;

const databaseId = "url-shortener";
const containerId = "links";

const client = new CosmosClient(connectionString);
const container = client.database(databaseId).container(containerId);

app.http('redirect', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: '{shortId}',
    handler: async (request, context) => {
        const shortId = request.params.shortId;

        try{
            const { resource: item } = await container.item(shortId, shortId).read();
            if (item && item.originalUrl) {
                return{
                    status: 302,
                    headers: { 'Location': item.originalUrl }
                };
            }else{
                return{
                    status: 404,
                    body: "404: Link not found"
                };                
            }
        }catch(error){
            return{
                status: 500,
                body: "500: Internal server error"
            };
        }
    }
});
