// import packages
import { roll } from './lib/roll.js';
import minimist from 'minimist';
import express from 'express';

//define const(s)
const app = express()
const args = minimist(process.argv.slice(2));
const port = args.port || 5000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/app/', function (req, res) {
    res.status(200).send('200 OK');
})

app.get('/app/roll/', function (req, res) {
    res.status(200).send(roll(6, 2, 1));
})

app.get('/app/roll/*/', function (req, res) {
    let url = req.url;
    let myArray = url.split("/");
    res.status(200).send(roll(myArray[3], 2, 1))
})

app.get('/app/roll/*/*/', function (req, res) {
    let url = req.url;
    let myArray = url.split("/");
    res.status(200).send(roll(myArray[3], myArray[4], 1))
})

app.get('/app/roll/*/*/*/', function (req, res) {
    let url = req.url;
    let myArray = url.split("/");
    res.status(200).send(roll(myArray[3], myArray[4], myArray[5]))
})


app.get('*', function (req, res) {
    res.status(200).send('404 NOT FOUND');
})

app.post('/app/roll/', function(req, res) {
    res.status(200).send(roll(req.body.sides, req.body.dice, req.body.rolls));
});

app.listen(port, () => {
    // console.log("Server listening on port " + port + ".")
})

/*
 tester
 app.get('/', function (req, res) {
 res.send('Hello World')
 })
*/


