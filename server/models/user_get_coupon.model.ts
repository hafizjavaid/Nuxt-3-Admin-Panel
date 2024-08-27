import { DataTypes } from 'sequelize';
import dbInstance from '../db_instance';

const UserGetCoupon = dbInstance.define('User_Get_Coupons', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    coupon_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    get_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    get_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active'
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // แก้ไขจาก defualtValue เป็น defaultValue
    }
});

(async () => {
    try {
        await dbInstance.authenticate();
        console.log('Connection DB-User_Get_Coupon has been established successfully.');

        await UserGetCoupon.sync({ force: false }); // force: false จะไม่ลบตารางเดิม
    } catch (error) {
        console.error('Unable to connect to the database or create table:', error);
    }
})();

export default UserGetCoupon;
