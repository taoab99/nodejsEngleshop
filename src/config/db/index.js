const mongoose = require('mongoose');


async function connect() {

    try {
        await mongoose.connect('mongodb+srv://shopdb:1111111111@cluster0.vtvuo.mongodb.net/shopconnect?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('connect successfully');
    } catch (error) {
        console.log('connect fail')

    }
}

module.exports = { connect };
