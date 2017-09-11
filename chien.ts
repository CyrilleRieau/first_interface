import { AnimalCompagnie } from "./animalCompagnie";


export class Chien implements AnimalCompagnie{
    nom:string;
    race:string;
    constructor(nom : string, race : string) {
        this.nom = nom;
        this.race = race;
        };
    allerChercher():void{
    console.log('Le chien ramène');
    };
    seGratter(){
        console.log('se gratte');
    };
    manger(boulette){
        console.log('le chien mange' + boulette)
    };
    emettreSon():string{
        return 'Aboie';
    }
}
let dog = new Chien('fifo','bichon');