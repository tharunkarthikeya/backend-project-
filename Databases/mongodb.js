import mongoose from 'mongoose';

import { DB_URI, NODE_ENV } from '../config/env.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected successfully in ${NODE_ENV} mode.`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};