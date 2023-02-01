import express, { Request, Response } from 'express'
import cors from 'cors'
import { HeroesController } from './controller/HeroesController'
import { VillainsController } from './controller/VillainsController'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

const heroesController = new HeroesController
const villainsController = new VillainsController

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.get("/heroes", heroesController.getHeroes )

app.post("/heroes", heroesController.insertHero )


app.get("/villains", villainsController.getVillains )

app.post("/villains", villainsController.insertVillain )