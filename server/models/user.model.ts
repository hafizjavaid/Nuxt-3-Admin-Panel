import { DataTypes } from 'sequelize';
import dbInstance from '../db_instance';

const User = dbInstance.define(
    'Users',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.STRING,
            defaultValue: 'normal'
        }
        // created: {
        //     type: DataTypes.DATE,
        //     defaultValue: DataTypes.NOW
        // },
        // updated: {
        //     type: DataTypes.DATE,
        //     defualtValue: DataTypes.NOW
        // }
    },
    {}
);
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
