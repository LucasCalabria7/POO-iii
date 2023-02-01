import { Request, Response } from 'express'
import { Heroes } from '../models/Heroes'
import { HeroesDatabase } from '../database/HeroesDatabase'
import { THero } from '../types/Types'

export class HeroesController {
    public getHeroes = async (req: Request, res: Response) => {
        try {
            const q = req.query.q as string
    
            const heroesDatabase = new HeroesDatabase()
            const heroesDB = await heroesDatabase.getHeroes(q)
    
            const heroes: THero = heroesDB.map((heroDB: THero) => new Heroes(
                heroDB.id,
                heroDB.name,
                heroDB.universe,
                heroDB.power,
                heroDB.strenght,
                heroDB.intelligence
            ))
    
            res.status(200).send(heroes)
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
    }

    public insertHero = async (req: Request, res: Response) => {
        try {
            const { id, name, universe, power, strenght, intelligence } = req.body
    
            if (typeof id !== "string") {
                res.status(400)
                throw new Error("'id' deve ser string")
            }
    
            if (typeof name !== "string") {
                res.status(400)
                throw new Error("'name' deve ser string")
            }
    
            if (typeof universe !== "string") {
                res.status(400)
                throw new Error("'email' deve ser string")
            }
    
            if (typeof power !== "string") {
                res.status(400)
                throw new Error("'password' deve ser string")
            }
    
            const heroDatabase = new HeroesDatabase()
            const heroExists = await heroDatabase.getHeroes(id)
    
            if (heroExists) {
                res.status(400)
                throw new Error("'id' já existe")
            }
    
            const newHero = new Heroes(
                id,
                name,
                universe,
                power,
                strenght,
                intelligence
            )
    
            const newHeroDB = {
                id: newHero.getId(),
                name: newHero.getName(),
                universe: newHero.getUniverse(),
                power: newHero.getPower(),
                strenght: newHero.getStrenght(),
                intelligence: newHero.getIntelligence(),
            }
    
            await heroDatabase.insertHero(newHeroDB)
    
            res.status(201).send(newHeroDB)
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
    }
}