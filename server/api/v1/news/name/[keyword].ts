import { Op } from 'sequelize';
import User from '~/server/models/user.model';
export default defineEventHandler(async (event) => {
    const keyword = getRouterParam(event, 'keyword');

    console.log(keyword);
    const keywordDecode = decodeURIComponent(keyword);
    const result = await User.findAll({
        where: {
            userName: {
                [Op.like]: `%${keywordDecode}%`
            }
        }
    });
    if (result) {
        return {
            status: 'success',
            data: result
        };
    } else {
        return {
            status: 'No data found'
        };
    }
});
