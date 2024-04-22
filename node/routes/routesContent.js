import express from "express";
import { getUnidades, getContents, getQuestions, getOpciones, getOpcionesCorrectasUnidad } from '../controllers/contentController.js';

const router = express.Router();

// Rutas para la tabla Unidad
router.get('/unid', getUnidades);

// Rutas para la tabla Content
router.get('/cont', getContents);

//
router.get('/ques/:id', getQuestions);

router.get('/opt/:id', getOpciones);

// router.get('/opt/ques/:id', getOpcionesByQuestionId);
router.get('/opt/cu/:id', getOpcionesCorrectasUnidad)

export default router