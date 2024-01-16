const { fetchContacts, fetchOneContact } = require('../models/index');
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

module.exports = {
    homeRoute,
    marioRoute,
    luigiRoute,
    contactsRoute,
    singleContactRoute
};