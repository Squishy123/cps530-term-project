const mongoose = require('mongoose');

async function connectMongo () {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(`Successfully connected to DB at ${process.env.DB_URL}`);
        return;
    } catch (err) {
        throw err;
    }
}

export default connectMongo;