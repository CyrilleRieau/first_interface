"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chat = /** @class */ (function () {
    function Chat(nom, couleur) {
        this.nom = nom;
        this.couleur = couleur;
    }
    ;
    Chat.prototype.chasser = function () {
        console.log('Le chat chasse');
    };
    ;
    Chat.prototype.seGratter = function () {
        console.log('se gratte');
    };
    ;
    Chat.prototype.manger = function (oiseau) {
        console.log('le chat mange' + oiseau);
    };
    ;
    Chat.prototype.emettreSon = function () {
        return 'Miaule';
    };
    return Chat;
}());
exports.Chat = Chat;
var cat = new Chat('bibou', 'bleu');
//# sourceMappingURL=chat.js.map