"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chien = /** @class */ (function () {
    function Chien(nom, race) {
        this.nom = nom;
        this.race = race;
    }
    ;
    Chien.prototype.allerChercher = function () {
        console.log('Le chien ramène');
    };
    ;
    Chien.prototype.seGratter = function () {
        console.log('se gratte');
    };
    ;
    Chien.prototype.manger = function (boulette) {
        console.log('le chien mange' + boulette);
    };
    ;
    Chien.prototype.emettreSon = function () {
        return 'Aboie';
    };
    return Chien;
}());
exports.Chien = Chien;
var dog = new Chien('fifo', 'bichon');
//# sourceMappingURL=chien.js.map