import {AnimalCompagnie} from './animalCompagnie';
import {Chien} from './chien';
import {Chat} from './chat';

const animaux : AnimalCompagnie[] = [];
animaux.push(new Chien('fifi', 'corgie'));
animaux.push(new Chat('fufu', 'pourpre'));

for (let animal of animaux){ 
    animal.manger('pâtée');
    console.log(animal.emettreSon());
    animal.seGratter();
}