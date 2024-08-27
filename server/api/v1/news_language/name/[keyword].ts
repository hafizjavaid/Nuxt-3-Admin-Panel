import { Op } from 'sequelize';
import News_Language from '~/server/models/news_language.model';
export default defineEventHandler(async (event) => {
    const keyword = getRouterParam(event, 'keyword');
    const keywordDecode = decodeURIComponent(keyword);
    const result = await News_Language.findAll({
        where: {
            title: {
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
