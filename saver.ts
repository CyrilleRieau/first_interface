import {Savable} from './savable';
export class Saver {
    private saves: string[]= [];
    
    save(toSave:Savable):void{
        this.saves.push(toSave.getInfo());
    };
    showSaves(){
        console.log(this.saves);
    }
}