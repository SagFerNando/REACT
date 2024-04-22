//import la conexion a la base de datos
import db from "../database/db.js";
//import sequalize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blog',{
    title: {type:DataTypes.STRING},
    content: {type:DataTypes.STRING},

})

export default BlogModel