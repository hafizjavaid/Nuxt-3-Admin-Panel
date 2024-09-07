import CouponLanguage from '@/server/models/coupon_language.model';

export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id');
        const formData = await readMultipartFormData(event);
        const bodyRow = formData?.find((x) => x.name === 'body');
        const file = formData?.find((x) => x.name === 'file');

        if (!bodyRow) return { status: 'No data found', body: 'body is required' };

        const body = bodyRow ? JSON.parse(bodyRow.data.toString()) : null;

        const result = await CouponLanguage.update(body, {
            where: {
                id
            }
        });
        // if (file) {
        //     uploadImage(file, result);
        // }
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
