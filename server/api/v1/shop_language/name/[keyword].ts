import { Shop_Language } from '@/server/models/shop_language.model';
import { defineEventHandler } from 'h3';
import { Op } from 'sequelize';
export default defineEventHandler(async (event) => {
    const keyword = getRouterParam(event, 'keyword');
    const keywordDecode = decodeURIComponent(keyword);
    console.log(keywordDecode);
    const result = await Shop_Language.findAll({
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
