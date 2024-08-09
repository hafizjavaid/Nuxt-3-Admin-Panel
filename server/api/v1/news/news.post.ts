import { readBody } from 'h3';
import { CreatedNewsDto } from '~/types/dtos/news/createdNews.dto';
import News from '@/server/models/news.model';

export default defineEventHandler(async (event) => {
    const body = await readBody<CreatedNewsDto>(event);
    console.log(body);

    try {
        const result = await News.create(body);
        return { status: 201, data: result };
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
