import CouponLanguage from '@/server/models/coupon_language.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await CouponLanguage.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
