import { defineEventHandler } from 'h3';
import UserGetCoupon from '@/server/models/user_get_coupon.model';
export default defineEventHandler(async (event) => {
    try {
        const result = await UserGetCoupon.findAll();
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        console.log(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
