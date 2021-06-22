const mongoose = require('mongoose');
const Scheme = mongoose.Schema;


const Accounts = new Scheme({
    email: { type: String, require: true, },
    password: { type: String, require: true },
    cart: { type: Array, }
}, { timestamps: true });

module.exports = mongoose.model('Accounts', Accounts);
