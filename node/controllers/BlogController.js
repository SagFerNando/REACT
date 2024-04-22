import BlogModel from "../models/BlogModel.js";

//Metodos de crud

//mostrar los registros
export const getAllBlogs = async (req, res)=> {
    try{
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    }catch (error){
        res.json({messege:error.messege})
    }
}

//mostrar un registro
export const getBlog = async(req, res)=>{
    try{
        const blog = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blog[0])
    }catch(error){
        res.json({messege:error.messege})
    }
}
//crear un registro
export const createBlog = async (req, res)=> {
    try{
        await  BlogModel.create(req.body)
        res.json({
            "messege":"Registro creado correctamente!"
        })
    }catch(error){
        res.json({messege:error.messege})
    }
}

//actualizar un registro
export const updateBlog = async (req, res)=> {
    try{
        BlogModel.update(req.body,{
            where:{ id:req.params.id}
        })
        res.json({
            "messege":"Registro actualizado correctamente!"
        })
    }catch(error){
        res.json({messege:error.messege})
    }
}

//eliminar un registro
export const deleteBlog = async (req, res)=> {
    try{
        await BlogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "messege":"Registro Eliminado correctamente!"
        })
    }catch(error){
        res.json({messege:error.messege})
    }
}

