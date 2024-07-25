// server/api/users.ts
import { db } from '../db';

export default defineEventHandler(async (event) => {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM users');
    connection.release();
    return rows;
});
