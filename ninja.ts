import {Fighter} from './fighter';
import * as express from 'express';
import * as bodyParser from 'body-parser';
const app:express.Express = express();

class Ninja{
    attack(f){};
    defend(f){};
    heal(f){};
    throw(f){};
    jump(f){};
}
let n = new Ninja();
let f: Fighter = n;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.listen(3000, "localhost", function() {
    console.log('Listening port 3000 !');
});