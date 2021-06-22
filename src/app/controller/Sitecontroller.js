
const port = 4000;


class Sitecontroller {

    index(req, res, next) {
        const servername = require('os').hostname();
        const serverport = port;
        console.log('server', servername);
        res.json({
            servername: servername,
            serverport: serverport
        });
    }
}
module.exports = new Sitecontroller;
