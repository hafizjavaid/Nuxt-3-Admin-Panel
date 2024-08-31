import Coupon from '@/server/models/Coupon.model';

export default defineEventHandler(async (event) => {
    try {
        const result = await Coupon.findAll();
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
