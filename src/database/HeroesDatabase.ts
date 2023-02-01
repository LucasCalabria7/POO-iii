import { THero } from "../types/Types";
import { BaseDatabase } from "./BaseDatabase";

export class HeroesDatabase extends BaseDatabase {
    public static TABLE_HEROES = "heroes"

    public async getHeroes(id?: string) {
        const [ heroesDB ] = await BaseDatabase
            .connection(HeroesDatabase.TABLE_HEROES)
            .where({ id })

        return heroesDB
    }

    public async insertHero(newHero: THero) {
        await BaseDatabase
            .connection(HeroesDatabase.TABLE_HEROES)
            .insert(newHero)
    }

}