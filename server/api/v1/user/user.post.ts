import User from '@/server/models/user.model';
import { uploadImage } from '~/server/services/upload-file-service';
import { readBody } from 'h3';
import bcrypt from 'bcryptjs';

export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event);
    const file = formData?.find((x) => x.name === 'file');
    const bodyRow = formData?.find((x) => x.name === 'body');

    if (!bodyRow) return { result: 'No data found', data: 'body is required' };
    const body = bodyRow ? JSON.parse(bodyRow?.data.toString()) : null;
    if (!body) return { result: 'No data found', data: 'body is required' };
    body.password = await bcrypt.hash(body.password, 10);

    const userData = await User.findOne({
        where: {
            userName: body.userName
        }
    });
    
    if (userData) {
        throw createError({
            status: '409',
            message: 'Username already exists'
        });
    }
    const result = await User.create(body);
    // if (file) {
    //     uploadImage(file, result);
    // }
    return {
        status: result ? 'success' : 'found',
        data: result
    };
});
