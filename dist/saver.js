"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Saver = /** @class */ (function () {
    function Saver() {
        this.saves = [];
    }
    Saver.prototype.save = function (toSave) {
        this.saves.push(toSave.getInfo());
    };
    ;
    Saver.prototype.showSaves = function () {
        console.log(this.saves);
    };
    return Saver;
}());
exports.Saver = Saver;
//# sourceMappingURL=saver.js.map