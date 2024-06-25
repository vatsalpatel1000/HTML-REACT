const express = require('express')
const app = express()
const port = 8080
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)});

let posts = [
    {
        id : uuidv4(),
        username : "vatsalpatel",
        content : "i love coding"
    },
    {
        id : uuidv4(),
        username : "shradhakapra",
        content : "i love hacking"
    },
    {
        id :  uuidv4(),
        username : "rahulkumar",
        content : "i love You"
    },
]    

app.get('/posts', (req, res) => {                           // Index route
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req, res) => {                        // Create new route
    res.render("new.ejs");
})

app.post("/posts",(req, res) =>{
    console.log(res.body);
    let {username,content} = req.body;
    let id = uuidv4();                                      // Create unique id 
    posts.push({ id, username, content });
    // res.send("post request working");
    res.redirect('/posts');                                 // Redirect to route  
})

app.get("/posts/:id",(req, res) =>{                         // show route 
    let {id} = req.params;
    console.log(id);
    let post  = posts.find((p) => id == p.id);
    console.log(post);
    //res.send('request working');
    res.render("show.ejs",{post})
})

app.patch("/posts/:id",(req,res)=>{                         // update route 
    let { id } = req.params;
    let newContent = req.body.content;
    console.log(newContent);
    console.log(id);
    let post  = posts.find((p) => id == p.id);
    post.content = newContent;
    console.log(post);
    // res.send("patch request working")
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {                       // Edit Route 
    let { id } = req.params;
    let post  = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res)=>{                            // Delete route
    let { id } = req.params;
    posts  = posts.filter((p) => id !== p.id);
    // res.send("delete success")
    res.redirect("/posts");
})