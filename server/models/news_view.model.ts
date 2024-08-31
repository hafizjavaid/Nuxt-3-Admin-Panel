import { DataTypes } from 'sequelize';
import dbInstance from '../db_instance';

const NewsView = dbInstance.define('News_views', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    news_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    read_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

(async () => {
    try {
        // ตรวจสอบการเชื่อมต่อฐานข้อมูล
        await dbInstance.authenticate();
        console.log('Connection DB-News_View has been established successfully.');

        // ซิงค์โมเดลกับฐานข้อมูล
        await NewsView.sync({ force: false }); // หรือใช้ alter: true หากต้องการเพียงปรับโครงสร้าง
    } catch (error) {
        console.error('Unable to connect to the database or create table:', error);
    }
})();

export default NewsView;
