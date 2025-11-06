const { app } = require('@azure/functions');
const { CosmosClient } = require('@azure/cosmos')

const connectionString = process.env.COSMOS_DB_CONNECTION_STRING;

const databaseId = "url-shortener";
const containerId = "links";

const client = new CosmosClient(connectionString);
const container = client.database(databaseId).container(containerId);

app.http('redirect', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        //context.log(`Http function processed request for url "${request.url}"`);
        const incomingLink = await request.text;
        
        return {body: incomingLink};
    }
});
