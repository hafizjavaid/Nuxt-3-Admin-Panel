import Ads from '@/server/models/ads.model';

export default defineEventHandler(async (event) => {
    try {
        const formData = await readMultipartFormData(event);
        const bodyRow = formData?.find((x) => x.name === 'body');
        if (!bodyRow) return { result: 'No data found', data: 'body is required' };
        const body = bodyRow ? JSON.parse(bodyRow?.data.toString()) : null;
        if (!body) return { result: 'No data found', data: 'body is required' };
        const result = await Ads.create(body);
        return {
            status: result ? 'success' : 'found',
            data: result
        };
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
