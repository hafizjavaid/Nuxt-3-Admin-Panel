import { Op } from 'sequelize';
import News from '~/server/models/news.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await News.findAll({
        where: {
            id
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
