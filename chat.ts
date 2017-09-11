import { AnimalCompagnie } from "./animalCompagnie";
export class Chat implements AnimalCompagnie{
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
}
let cat = new Chat('bibou', 'bleu');