const express = require("express")
const app = express()

// Load saved diary entries from local storage or use default entries
let pages = [
    "Dear Diary, today was a beautiful day! I went for a walk and enjoyed the fresh air.",
    "I tried baking cookies today. They didn’t turn out perfect, but I had fun!",
    "Life has been a rollercoaster lately. Some days are tough, but I’m staying positive.",
    "Met an old friend today. We talked for hours and laughed a lot. Such a great day!",
    "Sometimes, I just love sitting by the window, sipping tea, and watching the world go by."
];
app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
})

app.use(express.static(__dirname + "/public"))

app.get("/index.html", (request,response)=>{
    response.status(200).sendFile(__dirname + "/public/index.html" )
})   
app.get("/entry.html", (request,response)=>{
    response.status(200).sendFile(__dirname + "/public/entry.html" )
})   


app.listen(3000, ()=>{
    console.log("server is running")
})



