import { readBody, defineEventHandler } from 'h3';
import UserGetCouponDto from '@/server/models/user_get_coupon.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await UserGetCoupon.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
