export abstract class ClasseAbstraite {
    private prop : string = 'bloup';
    maMethode():string {
        return this.prop + '!' + this.maMethodeAbstraite(10);
    }
    abstract maMethodeAbstraite(arg:number):string;
}