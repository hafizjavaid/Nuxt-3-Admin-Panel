import { uploadImage } from '~/server/services/upload-file-service';
import { readBody } from 'h3';
import News from '@/server/models/news.model';

export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event);
    const file = formData?.find((x) => x.name === 'file');
    const bodyRow = formData?.find((x) => x.name === 'body');
    if (!bodyRow) return { result: 'No data found', data: 'body is required' };
    const body = bodyRow ? JSON.parse(bodyRow?.data.toString()) : null;
    if (!body) return { result: 'No data found', data: 'body is required' };
    const result = await News.create(body);
    if (file) {
        uploadImage(file, result);
    }
    return {
        status: result ? 'success' : 'found',
        data: result
    };
});
