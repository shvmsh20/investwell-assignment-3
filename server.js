// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/user/details', (req, res) => {
//     console.log("User Detals", req.query);
//     let userDetails = req.query;
//     res.send("Data send krra");
//   })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// const express = require("express");
// const app = express();
// app.get('/', (req, res)=>{
//     res.send("Heelo");
// })
// app.listen(3000, ()=>{
//     console.log("Server listening on port 3000");
// })



// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// app.post('/api/data', (req, res) => {
//   const data = req.query;
//   console.log(data);
//   res.send('Data received successfully');
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });




var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var port = 3000;

app.post('/sample/put/data', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(req.body);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);