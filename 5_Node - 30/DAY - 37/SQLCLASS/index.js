const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 8080;
const path = require ("path");
const {v4: uuidv4 } = require("uuid");
const methodOverride  = require("method-override");
uuidv4();

app.use(express.static(path.join(__dirname, "/public")));                       // redirect to public folder for css  // middleware

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"))         // give the path of view folder for connect ejs file with index file while run program from outside

// Middleware to parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));              // for express can understand url coded like in POST request data , it is middleware always use for post request
app.use(express.json());                                      // and conver it on Json data  post data
app.use(methodOverride("_method"));                           // method override

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database : 'delta_app',
  password :'1234'
});


let getRandomUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
// console.log(getRandomUser());


// // Inserting New Data
// let q = "INSERT INTO user (id,username,email,password) VALUE ?";
// let data = [];
// for(let i = 1; i<=100; i++){
//   data.push(getRandomUser());                         // generated 100 data store in data array
//   console.log(getRandomUser());
// }
// // let users = [                                      // insert 2 row 
// //   ['123','vatsal','Vatsalpatel@gmail.com','abc'],
// //   ['124','vat','Vatsal@gmail.com','abcd']
// // ];

// try{
//   // connection.query("SHOW TABLES" , (err,result) =>{
//     connection.query(q, [data], (err,result) =>{    // print /Insert 100 store data 
//     if(err) throw err;
//       console.log(result);            // show table in database  it is an array
//   })
// }
// catch(err){
//   console.log(err);
// }
// connection.end();                     // close the connection with mysql



//  cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"        go to mysql world
//  .\mysql -u root -p
//  Password 1234
//  source C:/Users/Vatsal/Desktop/HTML-REACT/5_Node - 30/DAY - 37/SQLCLASS/schema.sql;     // to run schema.sql file



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/', (req, res) => {
  let q = `select count(*) from user`;

  try{
    connection.query(q, (err,result) =>{    // print q querry 
    if(err) throw err;
      let count = result[0]["count(*)"];  
      res.render('home.ejs',{count})        
    });
  }
  catch(err){
    console.log(err);
    res.send('some error in DB')
  }
});

app.get('/users', (req, res) => {
  let q = `select * from user`;

  try{
    connection.query(q, (err,users) =>{    // print q querry 
    if(err) throw err;
      res.render('showusers.ejs',{users})        
    });
  }
  catch(err){
    console.log(err);
    res.send('some error in DB')
  }
});