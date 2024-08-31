import { readBody, defineEventHandler } from 'h3';
import User from '@/server/models/user.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await User.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
