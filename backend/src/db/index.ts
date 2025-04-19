import sqlite3 from "sqlite3";
import path from "path";

const dbPath = path.join(__dirname, "../../dance-website.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database: ", err.message);
  }
  console.log("Connected to SQLite DB");
});

const createTable = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(
        `CREATE TABLE IF NOT EXISTS bookings (
                 id INTEGER PRIMARY KEY AUTOINCREMENT,
                 name TEXT NOT NULL,
                 email TEXT NOT NULL,
                 classType TEXT NOT NULL
                )`,
        (err) => {
          if (err) reject(err);
          resolve();
        }
      );
    });
  });
};

export {db, createTable};
