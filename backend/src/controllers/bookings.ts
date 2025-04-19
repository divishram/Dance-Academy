import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import sqlite3 from 'sqlite3';
import { db } from '../db'; // Adjust the import based on your setup

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
    res.status(400).json({ message: 'Validation failed', errors: errors.array() });
    return;
  }

  const { name, email, type } = req.body;
  console.log(name, email, type)

  const stmt = db.prepare(`
    INSERT INTO bookings (name, email, classType)
    VALUES (?, ?, ?)
  `);

  try {
    await runInsert(stmt, [name, email, type]);
    res.status(201).json({ message: 'Booking confirmed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  } finally {
    stmt.finalize();
  }
};