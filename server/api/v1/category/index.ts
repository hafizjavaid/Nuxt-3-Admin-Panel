import Category from '@/server/models/category.model';

export default defineEventHandler(async (event) => {
    try {
        const result = await Category.findAll();
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
