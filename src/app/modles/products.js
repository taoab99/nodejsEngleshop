const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');


const Products = new Scheme({
    name: { type: String, require: true, },
    description: { type: String, },
    price: { type: Number, require: true, },
    category: { type: String },
    sale: { type: Number, },
    url: { type: String },
}, { timestamps: true });

Products.plugin(mongoosePaginate);
module.exports = mongoose.model('Products', Products);

