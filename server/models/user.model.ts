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
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defualtValue: DataTypes.NOW
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        defualtValue: false
    },
    is_shop: {
        type: DataTypes.BOOLEAN,
        defualtValue: false
    },
    picture: {
        type: DataTypes.STRING,
        defaultValue: false
    },
    gender: {
        type: DataTypes.STRING,
        defaultValue: true
    },
    email_verified: {
        type: DataTypes.STRING,
        defaultValue: false
    },
    is_editor: {
        type: DataTypes.BOOLEAN,
        defualtValue: false
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
