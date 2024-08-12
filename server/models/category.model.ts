import { DataTypes } from 'sequelize';
import dbInstance from '../db_instance';

const Category = dbInstance.define('Categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    language_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

(async () => {
    try {
        //await dbInstance.authenticate();
        console.log('Connection DB-Category has been established successfully.');

        await Category.sync({ force: false });
    } catch (error) {
        console.error('Unable to connect to the database or create table:', error);
    } finally {
        //await dbInstance.close();
    }
})();
export default Category;
