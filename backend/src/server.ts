import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import {db, createTable} from './db'
import bookingRoutes from './routes/bookings';


const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/book-class', bookingRoutes)

app.listen(PORT, async () => {
    try {
        await createTable();
        console.log(`Server running on localhost:${PORT}`);
    } catch(err) {
        console.error(`Failed to create db: ${err}`);
    }
})