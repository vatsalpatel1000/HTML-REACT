const express = require('express')
const app = express()
const port = 8080
const path = require ("path");

app.use(express.static(path.join(__dirname, "/public")));                       // redirect to public folder for css  // middleware

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"))         // give the path of view folder for connect ejs file with index file while run program from outside

// Middleware to parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));              // for express can understand url coded like in POST request data , it is middleware always use for post request
app.use(express.json());                                      // and conver it on Json data 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)});

app.get('/posts', (req, res) => {
    res.render("index.ejs",{posts});
});

let posts = [
    {
        username : "vatsalpatel",
        content : "i love coding"
    },
    {
        username : "shradhakapra",
        content : "i love hacking"
    },
    {
        username : "rahulkumar",
        content : "i love You"
    },
]    

app.get("/posts/new",(req, res) => {
    res.render("new.ejs");
})

app.post("/posts",(req, res) =>{
    console.log(res.body);
    let {username,content} = req.body;
    posts.push({ username, content });
    // res.send("post request working");
    res.redirect('/posts');
})