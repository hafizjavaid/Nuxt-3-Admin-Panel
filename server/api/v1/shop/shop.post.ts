import { uploadImage } from '~/server/services/upload-file-service';
import { readBody } from 'h3';
import { ShopDto } from '~/types/dtos/shop/shop.dto';
import Shop from '@/server/models/shop.model';

export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event);
    const file = formData?.find((x) => x.name === 'file');
    const bodyRow = formData?.find((x) => x.name === 'body');
    console.log('test shop');
    if (!bodyRow) return { result: 'No data found', data: 'body is required' };
    const body = bodyRow ? JSON.parse(bodyRow?.data.toString()) : null;
    if (!body) return { result: 'No data found', data: 'body is required' };
    const result = await Shop.create(body);
    if (file) {
        uploadImage(file, result);
    }
    return {
        status: result ? 'success' : 'found',
        data: result
    };
});
