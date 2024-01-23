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

const insertContact = async (data) => {
    try {
        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        const result = collection.insertOne(data);

        return result

    } catch (error) {
        console.error('There was an error inserting the data: ', error);
    }
};

const updateContact = async (id, data) => {
    try {
        await client.connect();

        const database = client.db(dbName);
        const collection = await database.collection(collectionName);

        const result = collection.updateOne({ _id: new ObjectId(id)}, { $set: data});

        return result;

    } catch (error) {
        console.error("Can't update: ", error)
    }
};

const deleteContact = async (id) => {
    try {
        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        const result = collection.deleteOne({_id: new ObjectId(id)});

        return result;
    } catch (error) {
        console.error("Can't delete", error);
    }
};

module.exports = {
    fetchContacts,
    fetchOneContact,
    insertContact,
    updateContact,
    deleteContact
};
