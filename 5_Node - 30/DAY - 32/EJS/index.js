const express = require ("express");
const app = express();
const path = require ("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/css")));                       // redirect to public folder for css  // middleware
app.use(express.static(path.join(__dirname, "/public/js")));  

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

// app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"))         // give the path of view folder for connect ejs file with index file while run program from outside

app.get("/",(req,res) => {
    res.render("home.ejs");                             // RENDER will find view folder and redirect home.ejs 
})

app.get("/rolldice",(req,res)=>{                        // route 
    let diceVel = Math.floor(Math.random()*6)+1         // database data pass
    res.render("rolldice.ejs",{diceVel});               // data pass to file 
})

// app.get("/ig/:username",(req,res)=>{                    // route with parameter
//     const followers = ['vats','bhav','nirbh'];          // pass array 
//     let { username } = req.params;
//     console.log("username");
//     res.render("instagram.ejs" , {username , followers});           
// })

app.get("/ig/:username",(req,res)=>{                        // get request by user with route and parameter
    let { username } = req.params;                          // get parameter
    let instadata = require('./data.json');                 // call data.json file 
    const data = instadata[username];                       // call user parameter data in data.json file 
    console.log(data);
    res.render('instagram.ejs',{ data });                   // parameter data send to ejs file to print  render will find view folder 
})