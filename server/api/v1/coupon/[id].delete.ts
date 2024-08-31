import Coupon from '@/server/models/coupon.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await Coupon.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
