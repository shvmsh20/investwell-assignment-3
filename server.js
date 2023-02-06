const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

// const users = [
//   {name: "Shivam", age: 21}, 
//   {name: "Shubham", age: 21}
// ]

//Get Req
// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1>')
// })

// app.get('/user/details', (req, res) => {
//     console.log("User Detals", req.query);
//     let userDetails = req.query;
//     console.log("Name ", req.query.name);
//     console.log("Age ", req.query.age);
//     res.send(userDetails);
//   })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })





//Post req
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// app.post('/api/data', (req, res) => {
//   const data = req.body;
//   console.log(data);
//   res.send('Data received successfully');
// });

//Adding a member
// app.post("/api/data", (req, res)=>{
//   const newUser = req.body;
//   users.push(newUser);
//   console.log(`New User added successfully`, newUser);
//   res.json(users);
// })

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



//Connection with mySQL
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Iwell',
  password: 'Agra@123'
});




//Get all rows

// connection.query(
//   'Select * from UserDetails',
//   function (err, results, fields){
//       console.log(results);
//       //console.log(fields);
//   }
// );


//Create new row

// connection.query(
//   'Insert INTO UserDetails Values("Himanshu", "Singh", 22, "Varanasi", 9889627085)',
//   function (err, results, fields){
//       console.log(results);
//       //console.log(fields);
//   }
// );
// connection.query(
//   'Insert INTO booksIssued Values("test", 9457914578, "test")',
//   function (err, results, fields){
//     if(err){
//       return console.log(err);
//     }
//       console.log(results);
//       //console.log(fields);
//   }
// );


// Delete a row

// connection.query(
//   'DELETE from booksIssued where userName = "test"',
//   (err, results, fields)=>{
//     if(err){
//       return console.log(err);
//     }
//     console.log(results);
//   }
// )


//Update 

// connection.query(
//   'UPDATE booksIssued SET bookName = "JAVA" where userName = "ahlsrm"',
//   (err, results, fields)=>{
//     if(err){
//       return console.log(err);
//     }
//     console.log(results);
//   }
// )

// Add row through api
app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log("Data", data);
  const sqlQuery = `Insert INTO booksIssued Values("${data.userName}", ${data.contactNo}, "${data.bookName}")`;
  console.log(sqlQuery);
  connection.query(sqlQuery , function (err, results){
        if(err){
          return console.log(err);
        }
          console.log(results);
          res.send("New row inserted...");
      }
    );

});

