import express from "express";
//import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/BlogController.js";
import { createUser, deleteUser, getAllUsers, getUser, updateUser, authenticateUser} from "../controllers/UserController.js";


const router = express.Router()

// router.get('/blogs', getAllBlogs);
// router.get('/blogs/:id', getBlog);
// router.post('/blogs', createBlog);
// router.put('/blogs/:id', updateBlog);
// router.delete('/blogs/:id', deleteBlog);


router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
// Ruta para autenticar un usuario
router.post('/auth', authenticateUser);

export default router