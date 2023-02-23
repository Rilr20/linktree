const express = require('express')
const app = express()
const path = require("path");
const port = 3000

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    let data = {
        //all: await eshop.getAllProducts(),
        title: "Eshop | About",
        links: [
            {
                name: "Steam",
                url: "https://steamcommunity.com/id/RichPotato",
            },
            {
                name: "Telegram",
                url: "https://t.me/richpotato",
            },
            {
                name: "Github",
                url: "https://github.com/rilr20",
            },
            {
                name: "Letterboxd",
                url: "https://letterboxd.com/Palmemordet/",
            },
        ]
    };
    res.render("link/main", data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})