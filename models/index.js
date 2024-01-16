const { client } = require('../connection/index');
const { ObjectId } = require('mongodb');
require('dotenv').config();

const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_COLLECTION;

const fetchContacts = async () => {
    try {
        await client.connect();
        
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        const result = await collection.find({}).toArray();

        return result;
    } catch (error) {
        console.error('Sorry, there was an error ',error);
    }
};

const fetchOneContact = async (id) => {
    try {
        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        
        const objectId = new ObjectId(id);
        const result = await collection.findOne({_id: objectId});

        return result;
    } catch (error) {
        console.error('Sorry, there was an error fetching the contact: ', error);
    }
};

module.exports = {
    fetchContacts,
    fetchOneContact
};
