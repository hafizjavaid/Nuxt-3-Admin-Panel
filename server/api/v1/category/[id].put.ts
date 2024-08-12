import { CreatedNewsDto } from '~/types/dtos/news/createdNews.dto';
import { readBody } from 'h3';
export default defineEventHandler((event) => {
    const id = getRouterParam(event, 'id');
    try {
    } catch (error) {
        return {
            message: 'update category',
            Id: id
        };
    }
});
