import { readBody } from 'h3';
import { CategoryDto } from '~/types/dtos/news/category.dto';
import Category from '@/server/models/category.model';

export default defineEventHandler(async (event) => {
    const body = await readBody<CategoryDto>(event);
    console.log(body);

    try {
        const result = await Category.create(body);
        return { status: 201, data: result };
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
