import { Message } from './../../../../.nuxt/components.d';
import { defineEventHandler } from 'h3';
import { Shops } from '@/server/models/shop.model';
import { uploadImage } from '~/services/upload-file-service';
import Shop from '@/serer/models/shop.model';

export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id');
        const formData = await readMultipartFormData(event);
        const file = formData?.find((x) => x.name === 'file');
        const bodyRow = formData?.find((x) => x.name === 'body');
        if (!bodyRow) return { status: 'No data found', body: 'body is required' };
        const body = bodyRow ? JSON.parse(bodyRow.data.toString()) : null;
        const result = await Shops.update(body, {
            where: {
                id
            }
        });
        if (file) {
            uploadIMage(file, { id: id, ...result });
        }
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        return {
            messge: 'Error update news' + error.Message
        };
    }
});
