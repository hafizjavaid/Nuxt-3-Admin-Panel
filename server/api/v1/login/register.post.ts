import { defineEventHandler, createError } from 'h3';
import registerDto from '~/types/dtos/register.dto';
import User from '@/server/models/user.model';
import bcrypt from 'bcryptjs';
export default defineEventHandler(async (event) => {
    const body = await readBody<registerDto>(event);
    body.password = await bcrypt.hash(body.password, 10);
    const userData = await User.findOne({
        where: {
            userName: body.userName
        }
    });
    if (userData) {
        throw createError({
            status: '409',
            messeage: 'Username already exists'
        });
    }
    try {
        const result = await User.create(body);
        return { status: 201, data: result };
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal Server Error', error: error.message };
    }
});
