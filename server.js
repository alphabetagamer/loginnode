var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
var dict = [];
var c=0;
app.use(bodyParser.urlencoded({ extended: true }));

// viewed at http://localhost:8080
app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname + '/signup.html'));
    console.log();
});
app.post('/signup', (req, res) => {
    c=0;
    var expr = req.body.user;
    var pass = req.body.password;
        if(dict.length==0)
        {
            dict.push({
                key:   expr,
                value: pass
            });
            res.end("ID Created");
            console.log(dict);
        }
        else
        {
            for(var i=0;i<dict.length;i++)
            {
        if(dict[i].key==expr)
        {
            res.end("ID already exists");
            console.log(dict);
            c=10;
        }
    }

    
     // create an empty array
    if(c!=10)
    {
    dict.push({
        key:   expr,
        value: pass
    });
    res.end("ID Created");
    console.log(dict);
    
}
        }

});
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
    console.log();
});
app.post('/login', (req, res) => {
    var expr = req.body.expr;
    var pass = req.body.pass;
     // create an empty array
     if(dict[expr]== undefined)
     {
         res.end("Wrong Login");
     }
     else if (dict[exps]==pass)
     {
         res.end("success");
     }
     else{
         res.end("Please Input fields");
     }
    

});
app.listen(8080);
