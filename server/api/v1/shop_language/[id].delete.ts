import { Shop_Language } from '@/server/models/shop_language.model';
import { readBody, defineEventHandler } from 'h3';
import { ShopLanguageDto } from '~/types/dtos/shop/shop_language.dto';
import Shop_Language from '@/server/models/shop_language.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await Shops.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
