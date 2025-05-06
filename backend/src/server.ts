import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import {createTable} from './db'
import bookingRoutes from './routes/bookings';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import logger from './utils/logger';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json({limit: '1mb'}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: 'Too many requests from this IP, please try again later.'
  });

app.use('/api/book-class', limiter, bookingRoutes)

app.listen(PORT, async () => {
    try {
        await createTable();
        logger.info(`Server running on localhost:${PORT}`);
    } catch(err) {
        logger.error({ err }, 'Failed to create DB');
    }
})