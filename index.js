/* https://chatgpt.com/share/67a55531-6930-8009-951e-a51d161fe03f */

const express = require('express')
const app = express();

let posts = [
    {
        date: '2025-02-06',
        time: '10:00 AM',
        entry: 'Today was a beautiful day. The sun was shining, and I spent the morning reading my favorite book.'
    },
    {
        date: '2025-02-05',
        time: '8:00 PM',
        entry: 'Feeling a bit down today. Work was overwhelming, but I am looking forward to some relaxation this weekend.'
    },
    {
        date: '2025-02-04',
        time: '7:30 AM',
        entry: 'Had a peaceful walk in the park this morning. The fresh air really helped me clear my mind.'
    },
    {
        date: '2025-02-03',
        time: '6:00 PM',
        entry: 'An exciting day at work! Got a new project to work on, and I am eager to get started.'
    },
    {
        date: '2025-02-02',
        time: '5:00 PM',
        entry: 'A quiet day. Just spent time at home with a good cup of tea and some quiet music.'
    }
];

app.set("view engine", "ejs")


app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

app.use(express.static(__dirname+ "/public"))


app.get("/", (request, response)=>{
  response.sendFile(__dirname+ "/public/index.html")
})


app.get("/", (request,response)=>{
  response.render("entry.ejs", posts)
})

app.get("/overview",(request,response)=>{
  response.send("overview.ejs", posts)
})



app.listen(3000, () => {
  console.log("Server running")
})