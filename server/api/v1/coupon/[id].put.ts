import Coupon from '@/server/models/coupon.model';

export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id');

        const formData = await readMultipartFormData(event);

        const bodyRow = formData?.find((x) => x.name === 'body');

        if (!bodyRow) return { status: 'No data found', body: 'body is required' };

        const body = bodyRow ? JSON.parse(bodyRow.data.toString()) : null;

        const result = await Coupon.update(body, {
            where: {
                id
            }
        });

        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        return {
            message: 'Error update coupon' + error.Message
        };
    }
});
