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
    console.log(userData);
    // ตรวจสอบอีเมล
    if (body.userName !== userData?.get('userName')) {
        throw createError({
            status: 401,
            message: 'Invalid userName or Password'
        });
    }

    // ตรวจสอบรหัสผ่าน
    const passwordMatch = await bcrypt.compare(body.password, userData.password);

    if (!passwordMatch) {
        throw createError({
            status: 401,
            message: 'Invalid Email or Password'
        });
    }
    return {
        status: 'success',
        data: {
            username: userData?.get('userName'),
            level: userData?.get('level'),
            createdAt: userData?.get('createdAt'),
            updatedAt: userData?.get('updatedAt')
        }
    };
});
