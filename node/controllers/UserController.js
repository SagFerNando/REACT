import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';

// Método para mostrar todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Método para mostrar un usuario por su ID
export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Método para crear un nuevo usuario
export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar si el correo electrónico ya está registrado
        const existingUser = await UserModel.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "El correo electrónico ya está registrado" });
        }

        // Crear el nuevo usuario solo si el correo electrónico no existe en la base de datos
        await UserModel.create({ name, email, password });
        res.status(201).json({ message: "Usuario creado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el usuario" });
    }
};


// Método para actualizar un usuario por su ID
export const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json({ message: "Usuario actualizado correctamente" });
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario" });
    }
}

// Método para eliminar un usuario por su ID
export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.json({ message: "Usuario eliminado correctamente" });
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el usuario" });
    }
}

// Método para autenticar un usuario por su correo electrónico y contraseña
export const authenticateUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        // Verificar la contraseña directamente (no recomendado para producción)
        if (password !== user.password) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        // Si las credenciales son correctas, enviar una respuesta de éxito
        res.json({ message: "Inicio de sesión exitoso", user });
    } catch (error) {
        console.error("Error al autenticar el usuario:", error);
        res.status(500).json({ message: "Error al autenticar el usuario" });
    }
};