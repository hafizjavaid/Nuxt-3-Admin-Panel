import News_Language from '@/server/models/news_language.model';

export default defineEventHandler(async (event) => {
    try {
        const result = await News_Language.findAll();
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
