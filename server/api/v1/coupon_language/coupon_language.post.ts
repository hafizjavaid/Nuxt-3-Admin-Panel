import CouponLanguage from '@/server/models/coupon_language.model';

export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event);
    const bodyRow = formData?.find((x) => x.name === 'body');
    const file = formData?.find((x) => x.name === 'file');
    if (!bodyRow) return { result: 'No data found', data: 'body is required' };
    const body = bodyRow ? JSON.parse(bodyRow?.data.toString()) : null;
    if (!body) return { result: 'No data found', data: 'body is required' };
    const result = await CouponLanguage.create(body);
    // if (file) {
    //     uploadImage(file, result);
    // }
    return {
        status: result ? 'success' : 'found',
        data: result
    };
});
