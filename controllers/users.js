const { prisma } = require('../prisma/prisma-client')
const brypt = require('bcrypt')
const jwt 

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email & !passwoed) {
        return res.status(400).json({ message: 'Пожалуйста заполните обязательные поля' })
    }

    const user = await prisma.user.findFirst({
        where: {
            email
        }
    })

    const isPasswordCorrenct = user && (await bryc)

}

export const register = async (req, res) => {
    res.send('register');
}

export const current = async (req, res) => {
    res.send('current');
}

module.exports = {
    login,
    register,
    current
}