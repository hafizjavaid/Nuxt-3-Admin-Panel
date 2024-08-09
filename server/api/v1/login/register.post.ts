import { defineEventHandler } from 'h3';
import registerDto from '~/types/dtos/register.dto';
import bcrypt from 'bcryptjs';
export default defineEventHandler(async (event) => {
    const body = await readBody<registerDto>(event);
    body.password = await bcrypt.hash(body.password, 10);
    return body;
});
