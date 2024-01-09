const homeRoute = (req, res) => {
    res.send('Welcome');
};

const marioRoute = (req, res) => {
    res.send("It's me Mario!")
};

const luigiRoute = (req, res) => {
    res.send('Hey Luigi!')
};

module.exports = {
    homeRoute,
    marioRoute,
    luigiRoute
};