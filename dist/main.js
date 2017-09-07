var Tree = /** @class */ (function () {
    function Tree(height, species, color, age) {
        this.height = height;
        this.species = species;
        this.color = color;
        this.age = age;
    }
    ;
    Tree.prototype.render = function () {
        var emoji = this.species;
        if (this.species === "oak") {
            emoji = "🌳";
        }
        else if (this.species === "spruce") {
            emoji = "🌲";
        }
        else if (this.species === "palm") {
            emoji = "🌴";
        }
        ;
        console.log(emoji + " " + this.height + 'metres ' + this.color);
    };
    return Tree;
}());
;
var Animal = /** @class */ (function () {
    function Animal(height, species, age, gender) {
        this.height = height;
        this.species = species;
        this.age = age;
        this.gender = gender;
    }
    ;
    Animal.prototype.render = function () {
        var emoji = this.species;
        if (this.species === "dog") {
            emoji = "🐕";
        }
        else if (this.species === "horse") {
            emoji = "🐎";
        }
        else if (this.species === "pig") {
            emoji = "🐖";
        }
        else if (this.species === "penguin") {
            emoji = "🐧";
        }
        else if (this.species === "dragoon") {
            emoji = "🐉";
        }
        else if (this.species === "koala") {
            emoji = "🐨";
        }
        ;
        console.log(emoji + " " + this.height + 'metres ' + this.age + " years, and this sex is " + this.gender);
    };
    return Animal;
}());
;
/*   let Tree = this;
    if(Tree.species === "oak") {
        console.log("🌳 "+Tree.height + 'metres ' + Tree.color);
    }
    else if(Tree.species === "spruce") {
        console.log("🌲 "+Tree.height + 'metres ' + Tree.color);
    }
    else if(Tree.species === "palm") {
        console.log("🌴 "+Tree.height + 'metres ' + Tree.color);
    }
};*/
var trees = [];
trees.push(new Tree(2, "spruce", "green", 3));
trees.push(new Tree(4, "oak", "orange", 10));
trees.push(new Tree(3, "palm", "green", 6));
for (var _i = 0, trees_1 = trees; _i < trees_1.length; _i++) {
    var t = trees_1[_i];
    t.render();
}
var animals = [];
animals.push(new Animal(1, "dog", 8, "M"));
animals.push(new Animal(2, "horse", 14, "M"));
animals.push(new Animal(7, "pig", 2, "M"));
animals.push(new Animal(0.4, "penguin", 1, "F"));
animals.push(new Animal(12, "dragoon", 473, "F"));
for (var _a = 0, animals_1 = animals; _a < animals_1.length; _a++) {
    var a = animals_1[_a];
    a.render();
}
/*let spruce = new Tree(2, "spruce", "green", 3);
let oak = new Tree(4, "oak", "orange", 10);
let palm = new Tree(4, "palm", "green", 6);

spruce.render();
oak.render();
palm.render();
*/
var objects = [];
objects.push(new Tree(2, "spruce", "green", 3));
objects.push(new Tree(4, "oak", "orange", 10));
objects.push(new Tree(3, "palm", "green", 6));
objects.push(new Animal(1, "dog", 8, "M"));
objects.push(new Animal(2, "horse", 14, "M"));
objects.push(new Animal(7, "pig", 2, "M"));
objects.push(new Animal(0.4, "penguin", 1, "F"));
objects.push(new Animal(12, "dragoon", 473, "F"));
for (var _b = 0, objects_1 = objects; _b < objects_1.length; _b++) {
    var o = objects_1[_b];
    o.render();
}
//# sourceMappingURL=main.js.map