import NewsView from '@/server/models/news_view.model';

export default defineEventHandler(async (event) => {
    try {
        const result = await NewsView.findAll();
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
