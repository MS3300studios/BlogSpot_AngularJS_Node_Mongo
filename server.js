var express = require('express');
var app = express();
var port = 3000;

app.use(require('./controllers/static'));
app.use(require('./controllers/blog'));
app.use(require('./controllers/users'));
app.use(require('./controllers/session'));

app.listen(port, function(req,res){
    console.log(`listening on ${port}`);
})

