"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var Ninja = /** @class */ (function () {
    function Ninja() {
    }
    Ninja.prototype.attack = function (f) { };
    ;
    Ninja.prototype.defend = function (f) { };
    ;
    Ninja.prototype.heal = function (f) { };
    ;
    Ninja.prototype.throw = function (f) { };
    ;
    Ninja.prototype.jump = function (f) { };
    ;
    return Ninja;
}());
var n = new Ninja();
var f = n;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(3000, "localhost", function () {
    console.log('Listening port 3000 !');
});
//# sourceMappingURL=ninja.js.map