"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chien_1 = require("./chien");
var chat_1 = require("./chat");
var animaux = [];
animaux.push(new chien_1.Chien('fifi', 'corgie'));
animaux.push(new chat_1.Chat('fufu', 'pourpre'));
for (var _i = 0, animaux_1 = animaux; _i < animaux_1.length; _i++) {
    var animal = animaux_1[_i];
    animal.manger('pâtée');
    console.log(animal.emettreSon());
    animal.seGratter();
}
//# sourceMappingURL=test-interface.js.map