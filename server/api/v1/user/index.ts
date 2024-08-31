import { defineEventHandler } from 'h3';
import User from '@/server/models/user.model';
export default defineEventHandler(async (event) => {
    try {
        const result = await User.findAll();
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        console.log(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
