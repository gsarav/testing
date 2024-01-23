const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect('mongodb+srv://gsarav:EntTzGPBM8eADEHx@cluster0.zpvb9fq.mongodb.net/UMDConnect');
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error){
        console.log(error);
    }
}
module.exports = connectDB;
