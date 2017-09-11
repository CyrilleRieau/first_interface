import {ClasseAbstraite} from './classe-abstraite';
export class classeConcrete extends ClasseAbstraite {
    maMethodeAbstraite(arg:number):string {
        return arg+;
    }
}