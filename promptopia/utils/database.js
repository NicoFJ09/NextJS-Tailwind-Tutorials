// utils/database.js

import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB ya está conectado');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
        });

        isConnected = true;
        console.log('MongoDB está conectado');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
};