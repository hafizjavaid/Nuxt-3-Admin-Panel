import { readBody } from 'h3';
import Coupon from '@/server/models/coupon.model';

export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event);
    const bodyRow = formData?.find((x) => x.name === 'body');
    if (!bodyRow) return { result: 'No data found', data: 'body is required' };
    const body = bodyRow ? JSON.parse(bodyRow?.data.toString()) : null;
    if (!body) return { result: 'No data found', data: 'body is required' };
    const result = await Coupon.create(body);

    return {
        status: result ? 'success' : 'found',
        data: result
    };
});
