import UserGetCoupon from '@/server/models/user_get_coupon.model';
import { defineEventHandler } from 'h3';
import { Op } from 'sequelize';
export default defineEventHandler(async (event) => {
    const keyword = getRouterParam(event, 'keyword');
    const keywordDecode = decodeURIComponent(keyword);
    console.log(keywordDecode);
    const result = await UserGetCoupon.findAll({
        where: {
            name: {
                [Op.like]: `%${keywordDecode}%`
            }
        }
    });
    if (result) {
        return {
            status: 'success',
            data: result
        };
    } else {
        return {
            status: 'No data found'
        };
    }
});
