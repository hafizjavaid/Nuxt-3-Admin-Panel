import CategoryLanguage from '@/server/models/category_language.model';

export default defineEventHandler(async (event) => {
    try {
        console.log('xxxx');
        const result = await CategoryLanguage.findAll();
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
