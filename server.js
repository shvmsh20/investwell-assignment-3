const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const users = [
  {name: "Shivam", age: 21}, 
  {name: "Shubham", age: 21}
]

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
app.post("/api/data", (req, res)=>{
  const newUser = req.body;
  users.push(newUser);
  console.log(`New User added successfully`, newUser);
  res.json(users);
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


