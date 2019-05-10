const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require("fs");

app.use(bodyParser.json());

app.get('/config', function(req,res){
    res.json({
        appName: "reactExpress"
    })
});

app.get('/api/retroItems', function(req, res){
    let retroItems;
    fs.readFile('funRetroItems.json', (err, data) => {  
        if (err) throw err;
        retroItems = JSON.parse(data);
        res.json(retroItems.retroItems);
    });
});

app.post('/api/retroItems', function(req, res){
    let retroItems;
    fs.readFile('funRetroItems.json', (err, data) => {  
        if (err) throw err;
        retroItems = JSON.parse(data);  
        retroItems.retroItems.push(req.body.newItem);
        retroItems = JSON.stringify(retroItems);
        fs.writeFile('funRetroItems.json', retroItems, (err) => {
            if(err) throw err;
            res.json(JSON.parse(retroItems));
        })
    });
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log(`Magic is happening on port ${PORT}`);
});
