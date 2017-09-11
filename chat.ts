import { AnimalCompagnie } from "./animalCompagnie";
import { Savable } from "./savable";
export class Chat implements AnimalCompagnie, Savable {
    nom:string;
    couleur:string;
    constructor(nom : string, couleur : string) {
        this.nom = nom;
        this.couleur = couleur;
        };
   chasser():void{
    console.log('Le chat chasse');
    };
    seGratter(){
        console.log('se gratte');
    };
    manger(oiseau){
        console.log('le chat mange' + oiseau)
    };
    emettreSon(): string{
        return 'Miaule';
    }

    getInfo():string{
        return "Chat : nom = " +this.nom + " couleur = " + this.couleur;
    }
}
let cat = new Chat('bibou', 'bleu');