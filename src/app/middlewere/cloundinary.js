require('dotenv').config();
const cloundinary = require('cloudinary').v2;


cloundinary.config({
    cloud_name: process.env.LOUNDINARY_CLOUN_NAME,
    api_key: process.env.LOUNDINARY_CLOUN_KEY,
    api_secret: process.env.LOUNDINARY_CLOUN_SCRETE

});

module.exports = cloundinary;
