import { DataTypes } from 'sequelize';
import dbInstance from '../db_instance';

const Shop = dbInstance.define('Shops', {
    // เปลี่ยนชื่อเป็น 'Shop' (Singular)
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    latitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    longitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    shop_picture: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'isactive'
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

(async () => {
    try {
        await dbInstance.authenticate(); // ทดสอบการเชื่อมต่อ
        console.log('Connection DB-Shops has been established successfully.');

        await Shop.sync({ force: false });
    } catch (error) {
        console.error('Unable to connect to the database or create table:', error);
    } finally {
        //await dbInstance.close(); // ปิดการเชื่อมต่อ
    }
})();
export default Shop;
