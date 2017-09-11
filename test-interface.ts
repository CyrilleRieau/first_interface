import {AnimalCompagnie} from './animalCompagnie';
import {Chien} from './chien';
import {Chat} from './chat';
import {Savable} from './savable';
import {Saver} from './saver';

const animaux : AnimalCompagnie[] = [];
animaux.push(new Chien('fifi', 'corgie'));
animaux.push(new Chat('fufu', 'pourpre'));

for (let animal of animaux){ 
    animal.manger('pâtée');
    console.log(animal.emettreSon());
    animal.seGratter();
};

const saver = new Saver();

saver.save(new Chien('fofi', 'curgie'));
saver.save(new Chat('fafu', 'rose'));
saver.showSaves();