import { readBody } from 'h3';
import News_Language from '@/server/models/news_language.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await News_Language.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
