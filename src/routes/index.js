const produtsRoute = require('./products');
const siteRoute = require('./site');
const accountRoute = require('./account');



function route(app) {
    app.use('/accout', accountRoute);
    app.use('/products', produtsRoute);
    app.use('/', siteRoute);
};

module.exports = route;