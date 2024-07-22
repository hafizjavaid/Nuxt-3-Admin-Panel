import mysql, { Pool } from 'mysql2/promise';

const pool: Pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'test',
    port: parseInt(process.env.DB_PORT) || 3306
});
export { pool as db };
