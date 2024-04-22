import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Unidad = db.define('unidad', {
    nombre: { type: DataTypes.STRING },
}, {
    timestamps: false, // Deshabilitar las columnas createdAt y updatedAt
});

const Content = db.define('content', {
    tema: { type: DataTypes.STRING },
    contenido: { type: DataTypes.TEXT },
    asset: { type: DataTypes.TEXT },
    notas: { type: DataTypes.TEXT },
}, {
    timestamps: false, // Deshabilitar las columnas createdAt y updatedAt
});

//preguntas
const Question = db.define('question', {
    pregunta: { type: DataTypes.TEXT },
    id_tema: { type: DataTypes.INTEGER },
}, {
    timestamps: false,
});


const Opcion = db.define('opcion', {
    id_question: { type: DataTypes.INTEGER },
    respuesta: { type: DataTypes.STRING(90) },
    correcta: { type: DataTypes.BOOLEAN },
}, {
    timestamps: false,
});



Unidad.hasMany(Content, { foreignKey: 'id_unidad' });
Content.belongsTo(Unidad, { foreignKey: 'id_unidad' });

Opcion.belongsTo(Question, { foreignKey: 'id_question' });
Question.belongsTo(Unidad, { foreignKey: 'id_tema' });

export { Unidad, Content, Question, Opcion }; // Exportar los modelos de manera individual
