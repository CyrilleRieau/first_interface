interface Renderer {
    render();
}

class Tree implements Renderer {
    height : number;
    species : string;
    color : string;
    age : number;
    constructor(height : number, species : string, color : string, age : number) {
    this.height = height;
    this.species = species;
    this.color = color;
    this.age =age;
    };
    render(){
        let emoji = this.species;
        if(this.species === "oak") {emoji = "🌳";
        } else if(this.species === "spruce") {emoji = "🌲";
        } else if(this.species === "palm") {emoji = "🌴";};
            console.log(emoji+ " " + this.height + 'metres ' + this.color);
        }
    };

    class Animal implements Renderer{
        height : number;
        species : string;
        age : number;
        gender : string
        constructor(height : number, species : string, age : number, gender : string) {
        this.height = height;
        this.species = species;
        this.age =age;
        this.gender = gender;
    };
        render(){
            let emoji = this.species;
            if(this.species === "dog") {emoji = "🐕";
            } else if(this.species === "horse") {emoji = "🐎";
            } else if(this.species === "pig") {emoji = "🐖";
            }else if (this.species ==="penguin") {emoji = "🐧";
            }else if (this.species ==="dragoon") {emoji = "🐉";
            }else if(this.species ==="koala") {emoji = "🐨";};
            console.log(emoji+ " " + this.height + 'metres ' + this.age + " years, and this sex is " + this.gender);
            }
        };

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
let trees : Tree[] = [];

trees.push(new Tree(2, "spruce", "green", 3));
trees.push(new Tree(4, "oak", "orange", 10));
trees.push(new Tree(3, "palm", "green", 6));

for(let t of trees){
    t.render();
}

let animals : Animal[] = [];

animals.push(new Animal(1, "dog", 8, "M"));
animals.push(new Animal(2, "horse", 14, "M"));
animals.push(new Animal(7, "pig", 2, "M"));
animals.push(new Animal(0.4, "penguin", 1, "F"));
animals.push(new Animal(12, "dragoon", 473, "F"));
for (let a of animals) {
    a.render();
}
/*let spruce = new Tree(2, "spruce", "green", 3);
let oak = new Tree(4, "oak", "orange", 10);
let palm = new Tree(4, "palm", "green", 6);

spruce.render();
oak.render();
palm.render();
*/
let objects:Renderer[]= [];
objects.push(new Tree(2, "spruce", "green", 3));
objects.push(new Tree(4, "oak", "orange", 10));
objects.push(new Tree(3, "palm", "green", 6));
objects.push(new Animal(1, "dog", 8, "M"));
objects.push(new Animal(2, "horse", 14, "M"));
objects.push(new Animal(7, "pig", 2, "M"));
objects.push(new Animal(0.4, "penguin", 1, "F"));
objects.push(new Animal(12, "dragoon", 473, "F"));
for(let o of objects){
    o.render();
}