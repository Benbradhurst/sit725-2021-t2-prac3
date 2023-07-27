var express = require('express')
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));

var port = process.env.port || 3000;

app.get('/',(req, res)=>{
    res.sendFile('views/pages/index')
})

app.listen(port,()=>{
    console.log("App listening to: "+ port)
    console.log("Server live at http://localhost:"+port)
    console.log("Type Ctrl+C to shut down");
})

