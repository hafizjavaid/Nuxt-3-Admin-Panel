import { readBody } from 'h3';
import { NewsDto } from '~/types/dtos/news/news.dto';
import News from '@/server/models/news.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await News.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
