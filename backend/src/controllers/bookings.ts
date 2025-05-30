import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import sqlite3 from 'sqlite3';
import { db } from '../db';
import { sendBookingConfirmation } from '../utils/mailer';
import logger from '../utils/logger';

interface BookingRequestBody {
  name: string;
  email: string;
  type: string;
}

export const runInsert = (stmt: sqlite3.Statement, values: any[]): Promise<void> => {
  return new Promise((resolve, reject) => {
    stmt.run(values, (err: Error | null) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const bookClass = async (req: Request<{}, {}, BookingRequestBody>, res: Response): Promise<void> => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.warn({ errors: errors.array() }, 'Validation failed');
    res.status(400).json({ message: 'Validation failed', errors: errors.array() });
    return;
  }

  const { name, email, type } = req.body;
  logger.info({ name, email, type }, 'Processing booking');

  const stmt = db.prepare(`
    INSERT INTO bookings (name, email, classType)
    VALUES (?, ?, ?)
  `);

  try {
    await runInsert(stmt, [name, email, type]);
    await sendBookingConfirmation(email, name, type);
    res.status(201).json({ message: 'Booking confirmed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  } finally {
    stmt.finalize();
  }
};