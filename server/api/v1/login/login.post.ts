import { defineEventHandler, readBody, createError } from 'h3';
import bcrypt from 'bcryptjs';

const mockData = {
    email: 'test@gmail.com',
    password: '$2a$10$m9et8Zbcm5Mf0xBmGf2QyeSDBi01kP6NUz8uzdj63J6abrhJlOc8K' // แฮชที่ถูกต้อง
};

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log('Received body:', body);

    // ตรวจสอบอีเมล
    if (body.email !== mockData.email) {
        console.log('Invalid email:', body.email);
        throw createError({
            status: 401,
            message: 'Invalid Email or Password'
        });
    }

    // const has = await bcrypt.hash(mockData.password, 10);
    // console.log(has);

    // ตรวจสอบรหัสผ่าน
    const passwordMatch = await bcrypt.compare(body.password, mockData.password);
    console.log('Password match:', passwordMatch);

    if (!passwordMatch) {
        throw createError({
            status: 401,
            message: 'Invalid Email or Password'
        });
    }
    return body;
});
