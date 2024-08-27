import { defineEventHandler } from 'h3';
import Shop_Language from '@/server/models/shop_language.model';
export default defineEventHandler(async (event) => {
    try {
        const result = await Shop_Language.findAll();
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        console.log(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
