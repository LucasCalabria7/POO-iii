import { Request, Response } from 'express'
import { TVillain } from '../types/Types'
import { VillainsDatabase } from '../database/VillainsDatabase'
import { Villains } from '../models/Villains'

export class VillainsController {
    public getVillains = async (req: Request, res: Response) => {
        try {
            const q = req.params.q
    
            const villainsDatabase = new VillainsDatabase()
            const villainsDB = await villainsDatabase.getVillains(q)
    
            const villains: TVillain = villainsDB.map((villainDB: TVillain) => new Villains(
                villainDB.id,
                villainDB.name,
                villainDB.universe,
                villainDB.power,
                villainDB.strenght,
                villainDB.intelligence
            ))
    
            res.status(200).send(villains)
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

    public insertVillain = async (req: Request, res: Response) => {
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
    
            const villainsDatabase = new VillainsDatabase()
            const villainExists = await villainsDatabase.getVillains(id)
    
            if (villainExists) {
                res.status(400)
                throw new Error("'id' já existe")
            }
    
            const newVillain = new Villains(
                id,
                name,
                universe,
                power,
                strenght,
                intelligence
            )
    
            const newVillainDB = {
                id: newVillain.getId(),
                name: newVillain.getName(),
                universe: newVillain.getUniverse(),
                power: newVillain.getPower(),
                strenght: newVillain.getStrenght(),
                intelligence: newVillain.getIntelligence(),
            }
    
            await villainsDatabase.insertVillain(newVillainDB)
    
            res.status(201).send(newVillainDB)
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