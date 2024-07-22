// server/api/users.ts
import { db } from '../db';

export default defineEventHandler(async (event) => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
});
