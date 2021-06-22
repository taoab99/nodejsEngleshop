const produtsRoute = require('./products');
const siteRoute = require('./site');
const accountRoute = require('./account');
const billcartRoute = require('./billcart');



function route(app) {
    app.use('/billcart', billcartRoute)
    app.use('/accout', accountRoute);
    app.use('/products', produtsRoute);
    app.use('/', siteRoute);
};

module.exports = route;