import { readBody, defineEventHandler } from 'h3';
import { ShopDet } from '~/types/dtos/shop/shop.dto';
import Shop from '@/server/models/shop.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await Shops.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
