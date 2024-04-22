import {Unidad, Content, Question, Opcion} from "../models/contentModels.js";


// Controlador para la tabla Unidad
export const getUnidades = async (req, res) => {
    try {
        const unidades = await Unidad.findAll();
        res.json(unidades);
    } catch (error) {
        console.log("Error al obtener las unidades:", error);
        res.json({ message: "Error al obtener las unidades" });
    
}
};

// Controlador para la tabla Content
export const getContents = async (req, res) => {
    try {
        const contents = await Content.findAll();
        res.json(contents);
    } catch (error) {
        console.log("Error al obtener los contenidos:", error);
        res.json({ message: "Error al obtener los contenidos" });
    }
};

export const getQuestions = async (req, res) => {
    try {
        const{ id } = req.params;
        const questions = await Question.findAll({ where: { id_tema: id } });
        res.json(questions);
    } catch (error) {
        console.log("Error al obtener las preguntas:", error);
        res.status(500).json({ message: "Error al obtener las preguntas" });
    }
};


export const getOpciones = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el parámetro de ID de la URL
        const opciones = await Opcion.findAll({ where: { id_question: id } });
        res.json(opciones);
    } catch (error) {
        console.log("Error al obtener las opciones:", error);
        res.status(500).json({ message: "Error al obtener las opciones" });
    }
};

// Controlador para obtener los IDs de las opciones correctas de una unidad
export const getOpcionesCorrectasUnidad = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de la unidad
        const preguntasUnidad = await Question.findAll({ 
            where: { id_tema: id } 
        });

        const idsPreguntasUnidad = preguntasUnidad.map(pregunta => pregunta.id);
        
        const opcionesCorrectasUnidad = await Opcion.findAll({ 
            where: { id_question: idsPreguntasUnidad, correcta: true } 
        });

        // Obtener solo los IDs de las opciones correctas
        const idsOpcionesCorrectas = opcionesCorrectasUnidad.map(opcion => opcion.id);
        res.json(idsOpcionesCorrectas);
    } catch (error) {
        console.log("Error al obtener las opciones correctas de la unidad:", error);
        res.status(500).json({ message: "Error al obtener las opciones correctas de la unidad" });
    }
};


