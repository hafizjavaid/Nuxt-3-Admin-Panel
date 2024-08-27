import News_Language from '@/server/models/news_language.model';
import { uploadImage } from '~/server/services/upload-file-service';

export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id');

        const formData = await readMultipartFormData(event);

        const file = formData?.find((x) => x.name === 'file');

        const bodyRow = formData?.find((x) => x.name === 'body');

        if (!bodyRow) return { status: 'No data found', body: 'body is required' };

        const body = bodyRow ? JSON.parse(bodyRow.data.toString()) : null;

        const result = await News_Language.update(body, {
            where: {
                id
            }
        });
        if (file) {
            uploadImage(file, { id: id, ...result });
        }
        return {
            status: 'success',
            data: result
        };
    } catch (error) {
        return {
            message: 'Error update news' + error.Message
        };
    }
});
