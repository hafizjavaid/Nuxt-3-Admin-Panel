import { DataTypes } from 'sequelize';
import dbInstance from '../db_instance';

const Ads = dbInstance.define('Ads', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    is_popup: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    is_slide: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    is_news_content: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    is_list: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'isactive'
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    stop_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

(async () => {
    try {
        await dbInstance.authenticate();
        console.log('Connection to DB_Ads has been established successfully.');

        await Ads.sync({ force: false });
        console.log('Ads table has been created successfully.');
    } catch (error) {
        console.error('Unable to connect to the database or create table:', error);
    } finally {
        //await dbInstance.close();
    }
})();

export default Ads;
