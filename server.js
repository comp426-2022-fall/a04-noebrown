// import packages
import { roll } from './lib/roll.js';
import minimist from 'minimist';
import express from 'express';

// define const(s)
const app = express()
const args = minimist(process.argv.slice(2));
const port = args.port || 5000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parsing
app.get('/app/', function (req, res) {
    res.send('200 OK');
})

app.get('/app/roll/', function (req, res) {
    res.send(roll(6, 2, 1));
})

app.get('/app/roll/*/', function (req, res) {
    let url = req.url;
    let array = url.split("/");
    res.send(roll(array[3], 2, 1))
})

app.get('/app/roll/*/*/', function (req, res) {
    let url = req.url;
    let array = url.split("/");
    res.send(roll(array[3], array[4], 1))
})

app.get('/app/roll/*/*/*/', function (req, res) {
    let url = req.url;
    let array = url.split("/");
    res.send(roll(array[3], array[4], array[5]))
})


app.get('*', function (req, res) {
    res.send('404 NOT FOUND');
})

app.post('/app/roll/', function(req, res) {
    res.send(roll(req.body.sides, req.body.dice, req.body.rolls));
});

app.listen(port)

/*
 testers
 app.get('/', function (req, res) {
 res.send('Hello World')
 
 app.get('/app/', function (req, res) {
     res.send('200 OK');
 })
 })
*/

