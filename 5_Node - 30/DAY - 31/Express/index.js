const express = require('express');
const app = express();

//install nodemon

let port = 8080;
app.listen(port, () =>{
    console.log(`app is listening to ${port}`);
});

// app.use((req,res)=>{
//     console.log('request received');
    // res.send('this is basic response');  // can send only one response at a time
    // res.send({
    //     name : "vatsal",            // express conver js object to JSON
    //     age : 28
    // });
//     let code ="<h1> fruits </h1> <ul><li> apple </li> <li> orange </li></ul>";
//     res.send = (code);
// });


// app.get("/about", (req , res) => {
//     res.send("about website ");
// })

app.get("/", (req , res) => {
    res.send("hello i m root ");
})

app.get("/:username/:id", (req , res) => {
    console.log(req.params)                 // path parameter
    let { username, id } = req.params;
    let str = `welcome to page of ${username} & ${id}`
    res.send(str);
})

app.get("/search", (req , res) => {
    console.log(req.query);                 // Query strings
    res.send("no result");
})
