import { DataTypes } from 'sequelize';
import dbInstance from '../db_instance';

export const Shop_Language = dbInstance.define('Shop_Languages', {
    // เปลี่ยนชื่อเป็น 'Shop' (Singular)
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    shop_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    language_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
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
        console.log('Connection DB-Shops_Language has been established successfully.');

        await Shop_Language.sync({ force: false });
    } catch (error) {
        console.error('Unable to connect to the database or create table:', error);
    } finally {
        //await dbInstance.close(); // ปิดการเชื่อมต่อ
    }
})();
export default Shop_Language;
