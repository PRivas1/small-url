const { app } = require('@azure/functions');
const { CosmosClient } = require('@azure/cosmos');

const connectionString = process.env.COSMOS_DB_CONNECTION_STRING;

const databaseId = "url-shortener";
const containerId = "links";

const client = new CosmosClient(connectionString);
const container = client.database(databaseId).container(containerId);



app.http('shorten', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request) => {
        try{
            //simple key check
            if(await request.headers.get('key') !== "shortURL"){
                return { 
                    status: 401, 
                    body: "Unathorized Access" 
                };
            }
            const incomingUrl = await request.text(); // get the original url
            

            const newId = Math.random().toString(36).substring(2,8); //random urlId formula

            // make new item
            const newItem = { 
                id: newId,
                originalUrl: incomingUrl
            }

            //send item to db
            await container.items.create(newItem); 

            // return id
            return { body: newId };

        }catch(error){
            return { 
                status: 500, 
                body: "Error connecting to or writing to Cosmos DB." 
            };
        }
    }
});
