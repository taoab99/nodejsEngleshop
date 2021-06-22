const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Billcart = new Schema({
    email: { type: String },
    // email: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Accounts'
    // },
    cart: { type: Array, }
});

module.exports = mongoose.model('Billcart', Billcart);
