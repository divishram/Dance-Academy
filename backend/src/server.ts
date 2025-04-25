import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import {createTable} from './db'
import bookingRoutes from './routes/bookings';
import helmet from 'helmet';

dotenv.config();
const PORT = process.env.PORT
const app = express();
app.use(helmet());
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