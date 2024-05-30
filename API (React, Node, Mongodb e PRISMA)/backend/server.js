import express from "express"
import { PrismaClient } from '@prisma/client'
import cors from "cors"
const app = express()
const prisma = new PrismaClient()

// Use o middleware cors
app.use(cors());

// Permite que seja usado o JSON
app.use(express.json())

// ADICIONA usuario ao banco de dados
app.post("/users", async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age // Certifique-se de que age é uma string
            } 
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// ATUALIZA/EDITA usuario do banco de dados
app.put("/users/:id", async (req, res) => {
    try {
        const user = await prisma.user.update({
            //Atualiza pelo id
            where: {
                id: req.params.id
            },
            //Novos valores do usuarioo
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age 
            } 
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// DELETA usuario do banco de dados
app.delete("/users/:id", async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({message: "Usuário deletado com sucesso!!"})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// BUSCA usuarios no banco de dados e mostra o resultado em json
app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
