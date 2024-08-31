import { DataTypes } from 'sequelize';
import dbInstance from '../db_instance';

const Coupon = dbInstance.define('Coupons', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    shop_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'isactive'
    },
    publish_date: {
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
        //await dbInstance.authenticate();
        console.log('Connection DB-Coupon has been established successfully.');
        await Coupon.sync({ force: false });
    } catch (error) {
        console.error('Unable to connect to the database or create table:', error);
    } finally {
        //await dbInstance.close();
    }
})();
export default Coupon;
