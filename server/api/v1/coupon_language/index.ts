import CouponLanguage from '@/server/models/coupon_language.model';

export default defineEventHandler(async (event) => {
    try {
        const result = await CouponLanguage.findAll();
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
