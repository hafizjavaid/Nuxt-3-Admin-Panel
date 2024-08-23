import { defineEventHandler, readBody, createError } from 'h3';
import bcrypt from 'bcryptjs';
import User from '~/server/models/user.model';
export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const userData = await User.findOne({
        where: {
            userName: body.userName
        }
    });

    if (body.userName !== userData?.get('userName')) {
        throw createError({
            status: 401,
            message: 'Invalid userName or Password'
        });
    }

    const passwordMatch = await bcrypt.compare(body.password, userData.password);

    if (!passwordMatch) {
        throw createError({
            status: 401,
            message: 'Invalid Username or Password'
        });
    }
    return {
        status: 'success',
        data: {
            username: userData?.get('userName'),
            is_admin: userData?.get('is_admin'),
            is_shop: userData?.get('is_shop'),
            createdAt: userData?.get('createdAt'),
            updatedAt: userData?.get('updatedAt')
        }
    };
});
