import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UserModel = db.define('user', {
    nombre: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    progreso: {type: DataTypes.INTEGER},
}, {
    timestamps: false, // Deshabilitar las columnas createdAt y updatedAt
});

export default UserModel;