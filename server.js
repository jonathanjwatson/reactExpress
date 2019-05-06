const express = require('express');
const app = express();


app.get('/config', function(req,res){
    res.json({
        appName: "reactExpress"
    })
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log(`Magic is happening on port ${PORT}`);
});
