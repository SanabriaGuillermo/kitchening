const express = require("express");
const path = require("path");
const app= express();
const port=3030;

/*Middleware*/
app.use(express.static("public"));

/*Routes*/
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.listen(port, ()=>console.log(`servidor corriendo en el puerto ${port}\nhttp://localhost:${port}`));

