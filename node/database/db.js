import { Sequelize } from "sequelize";

const db = new Sequelize('ReactCourse', 'root', '6349',{
    host:'localhost',
    dialect:'mysql'
})

export default db;
