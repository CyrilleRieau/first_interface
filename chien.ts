import { AnimalCompagnie } from "./animalCompagnie";
import { Savable } from "./savable";


export class Chien implements AnimalCompagnie, Savable {
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
    getInfo():string{
        return "Chien : nom = " +this.nom + " race = " + this.race;
    }
}
let dog = new Chien('fifo','bichon');