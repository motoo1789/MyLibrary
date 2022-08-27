const path = require("path")
const fs = require("fs");
const ejs = require("ejs")

const express = require("express");
const app = express();
app.engine("ejs",ejs.renderFile);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res) => {
    const targetimagdir = fs.readdirSync("./public/images/");
    let currentWorkingDirectory = process.cwd();

    if(targetimagdir.length >= 0)
    {
        res.render("library.ejs",
        {
            title: "My Library",
            links: targetimagdir
        })
    }
    else{
        console.log("There is somethig wrong about fs / images!");
    }


});


app.get("/book",(req,res) => {

    const title = req.query.title;
    const targetimagdir = fs.readdirSync("./public/images/" + title);

    if(targetimagdir.length >= 0)
    {
        const targetimags = targetimagdir.map((imagedir) => "./images/" + title + "/" + imagedir);

        res.render("book.ejs",
        {
            title: title,
            images: targetimags
        })
    }
    else{
        console.log("There is somethig wrong about fs / images!");
    }
});

const server = app.listen(8080,() =>
{
    console.log("create sever");
})
