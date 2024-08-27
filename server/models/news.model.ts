import { DataTypes } from 'sequelize';
import dbInstance from '../db_instance';

const News = dbInstance.define('News', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publish: {
        type: DataTypes.DATE,
        allowNull: false
    },
    stop_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
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
        // ตรวจสอบการเชื่อมต่อฐานข้อมูล
        await dbInstance.authenticate();
        console.log('Connection DB-News has been established successfully.');

        // ซิงค์โมเดลกับฐานข้อมูล
        await News.sync({ force: false }); // หรือใช้ alter: true หากต้องการเพียงปรับโครงสร้าง
        console.log('News table created successfully.');
    } catch (error) {
        console.error('Unable to connect to the database or create table:', error);
    }
})();

export default News;
