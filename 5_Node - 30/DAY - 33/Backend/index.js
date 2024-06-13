const express = require("express");
const app = express();
const port = 8080;

// Middleware to parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));              // for express can understand url coded like in POST request data , it is middleware always use for post request
app.use(express.json());                                      // and conver it on Json data 

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

app.get("/register", (req, res) => {
    console.log(req.query);     
    let { username , password } = req.query;                    // print request data comes from html page
    res.send(`Standard GET response. welcome to,  ${username}`);
});

app.post("/register", (req, res) => {
    console.log(req.body);                                  // print request data comes from html page
    let { username , password } = req.body;                 // body conver data to json so use middleware here            
    res.send(`Standard POST response. welcome to, ${username}`);
});
