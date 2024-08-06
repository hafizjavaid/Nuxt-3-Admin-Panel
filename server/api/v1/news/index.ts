import { Sequelize } from 'sequelize';
import New from '@/server/models/news.model';

export default defineEventHandler(async (event) => {
    const result = await New.findAll({});
    return {
        hello: 'Get all News'
    };
});
