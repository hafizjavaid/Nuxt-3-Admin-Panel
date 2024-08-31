import { DataTypes } from 'sequelize';
import dbInstance from '../db_instance';

const User = dbInstance.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // แก้ไขการพิมพ์ผิด
    },
    is_shop: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // แก้ไขการพิมพ์ผิด
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true // คุณอาจไม่ต้องการใช้ defaultValue สำหรับฟิลด์นี้ หรือกำหนดค่าเริ่มต้นเป็น URL หรือข้อความที่เหมาะสม
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true // หากต้องการใช้ defaultValue คุณอาจตั้งเป็น 'male', 'female', หรืออื่นๆที่เหมาะสม
    },
    email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // แก้ไขการพิมพ์ผิดและเปลี่ยนประเภทข้อมูลเป็น BOOLEAN
    },
    is_editor: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // แก้ไขการพิมพ์ผิด
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // แก้ไขการพิมพ์ผิด
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // แก้ไขการพิมพ์ผิด
    }
});

(async () => {
    try {
        await dbInstance.authenticate();
        console.log('Connection DB-User has been established successfully.');

        await User.sync({ force: false });
    } catch (error) {
        console.error('Unable to connect to the database or create table:', error);
    }
})();
export default User;
