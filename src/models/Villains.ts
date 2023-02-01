export class Villains {
    constructor(
        private id: string,
        private name: string,
        private universe: string,
        private power: string,
        private strenght: number,
        private intelligence: number,
    ) {}

    public getId(): string {
        return this.id
    }

    public setId(value: string): void {
        this.id = value
    }

    public getName(): string {
        return this.name
    }

    public setName(value: string): void {
        this.name = value
    }

    public getUniverse(): string {
        return this.universe
    }

    public setUniverse(value: string): void {
        this.universe = value
    }

    public getPower(): string {
        return this.power
    }

    public setPower(value: string): void {
        this.power = value
    }

    public getIntelligence(): number {
        return this.intelligence
    }

    public setIntelligence(value: number) {
        this.intelligence = value
    }

    public getStrenght(): number {
        return this.strenght
    }
    
    public setStrenght(value: number) {
        this.strenght = value
    }
}