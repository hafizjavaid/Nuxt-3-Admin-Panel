import { Op } from 'sequelize';
import Coupon from '~/server/models/coupon.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await Coupon.findAll({
        where: {
            id
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
