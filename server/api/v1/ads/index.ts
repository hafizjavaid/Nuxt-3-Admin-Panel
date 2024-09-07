import Ads from '@/server/models/ads.model';

export default defineEventHandler(async (event) => {
    try {
        const result = await Ads.findAll();
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
