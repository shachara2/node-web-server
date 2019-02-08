const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});

app.use((req, res, next)=>{
    res.render('maintenance.hbs');
});

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => { 
    res.render('home.hbs',
    {
        welcomeMessage: 'welcome xoxo',
        pageTitle: 'home page',
    });
});

app.get('/about', (req, res) => { 
    res.render('about.hbs',
    {
        pageTitle: 'About page'
    });
});

app.listen(3000);