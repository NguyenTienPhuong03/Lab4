var express = require('express');
var expressHbs = require('express-handlebars');

var app = express();

app.get('/',function(req,res){
    res.send('Hello Word');
});

app.engine('.hbs', expressHbs.engine({extname: '.hbs'}));
app.set('view engine','.hbs');

app.get('/handlebars',function(req,res){
    res.render('index');
})

app.listen(process.env.PORT || 3000);