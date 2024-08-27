import { Shop_Language } from '@/server/models/shop_language.model';
import { defineEventHandler } from 'h3';
import { uploadImage } from '~/services/upload-file-service';

export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id');
        const formData = await readMultipartFormData(event);
        const file = formData?.find((x) => x.name === 'file');
        const bodyRow = formData?.find((x) => x.name === 'body');
        if (!bodyRow) return { status: 'No data found', body: 'body is required' };
        const body = bodyRow ? JSON.parse(bodyRow.data.toString()) : null;
        const result = await Shop_Language.update(body, {
            where: {
                id
            }
        });
        // ตรวจสอบเรี่องรูปอีกที
        // if (file) {
        //     uploadIMage(file, { id: id, ...result });
        // }
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        return {
            messge: 'Error update shop_language : ' + error.Message
        };
    }
});
