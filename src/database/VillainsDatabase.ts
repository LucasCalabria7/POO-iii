import { TVillain } from "../types/Types";
import { BaseDatabase } from "./BaseDatabase";

export class VillainsDatabase extends BaseDatabase {
    public static TABLE_VILLAINS = "villains"

    public async getVillains(id: string) {
        const [ VillainDB ] = await BaseDatabase
            .connection(VillainsDatabase.TABLE_VILLAINS)
            .where({ id })

        return VillainDB
    }

    public async insertVillain(newVillain: TVillain) {
        await BaseDatabase
            .connection(VillainsDatabase.TABLE_VILLAINS)
            .insert(newVillain)
    }

    public async updateVillainById(id: string, newVillain: number) {
        await BaseDatabase
            .connection(VillainsDatabase.TABLE_VILLAINS)
            .update({ villain: newVillain })
            .where({ id })
    }
}