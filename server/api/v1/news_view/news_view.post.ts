import { uploadImage } from '~/server/services/upload-file-service';
import { readBody } from 'h3';
import NewsView from '@/server/models/news_view.model';

export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event);
    const bodyRow = formData?.find((x) => x.name === 'body');

    if (!bodyRow) return { result: 'No data found', data: 'body is required' };
    const body = bodyRow ? JSON.parse(bodyRow?.data.toString()) : null;
    if (!body) return { result: 'No data found', data: 'body is required' };
    const result = await NewsView.create(body);

    return {
        status: result ? 'success' : 'found',
        data: result
    };
});
