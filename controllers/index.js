const { fetchContacts, fetchOneContact, insertContact, updateContact, deleteContact } = require('../models/index');
const { client } = require('../connection/index');
const { response } = require('express');

const homeRoute = (req, res) => {
    res.send('Welcome Faby');
};

const marioRoute = (req, res) => {
    res.send("It's me Mario!")
};

const luigiRoute = (req, res) => {
    res.send('Hey Luigi!')
};

const contactsRoute = async (req, res) => {
    try {
        const data = await fetchContacts();
        res.send(data);

    } catch (error) {
        console.error('Sorry, there was an error fetching contacts: ', error);
    } finally {
        await client.close();
    }
};

const singleContactRoute = async (req, res) => {
    try {
        const data = await fetchOneContact(req.params.id);
        res.send(data);
    } catch (error) {
        console.error('There was an error: ', error);
    } finally {
        await client.close();
    }
};

const postRoute = async (req, res) => {
    try {

        const result = await insertContact(req.body);

        if (result) {
            res.status(201).json({ message: "New Document inserted Id: " + (await result).insertedId })
        }
    } catch (error) {
        console.error('There was an error: ', error);
        res.status(500).json({ message: "Internal Server Error." });
    } finally {
        await client.close();
    }
};

const putRoute = async (req, res) => {
    try {

        const result = await updateContact(req.params.id, req.body);
        
        if (result.modifiedCount > 0) {
            res.status(200).json({ message: "Doc was updated Successfully." })
        } else {
            res.status(400).json({ message: "Something went wrong :/" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error." });
    } finally {
        await client.close();
    }
};

const deleteRoute = async (req, res) => {
    try {

        const result = await deleteContact(req.params.id);
        
        if (result.deletedCount === 1) {
            res.status(200).json({ message: "Doc was deleted successfully." })
        } else {
            res.status(400).json({ message: "Something went wrong, sorry." })
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error." });
    } finally {
        client.close();
    }
};

module.exports = {
    homeRoute,
    marioRoute,
    luigiRoute,
    contactsRoute,
    singleContactRoute,
    postRoute,
    putRoute,
    deleteRoute
};