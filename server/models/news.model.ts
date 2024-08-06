import { Textarea } from './../../.nuxt/components.d';
import { DataTypes } from 'sequelize';
import dbInstance from '../db_instance';

const New = dbInstance.define(
    'News',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        news_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        language_id: {
            type: DataTypes.STRING(4),
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        cover_picture: {
            type: DataTypes.STRING(255)
        },
        detail: {
            type: DataTypes.TEXT
        },
        view: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        approved: {
            type: DataTypes.BOOLEAN
        },
        reference: {
            type: DataTypes.STRING(255)
        },
        url: {
            type: DataTypes.TEXT
        },
        style: {
            type: DataTypes.TEXT
        },
        editor_data: {
            type: DataTypes.TEXT
        }
    },
    {}
);
(async () => {
    try {
        //await dbInstance.authenticate();
        console.log('Connection has been established successfully.');

        await New.sync({ force: false });
        console.log('News table created.');
    } catch (error) {
        console.error('Unable to connect to the database or create table:', error);
    } finally {
        await dbInstance.close();
    }
})();
export default New;
