import express from "express";
import bodyParser from "body-parser";
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/drinks/:name", async (req, res) => {
    const drinkName = req.params.name;

    const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    );

    const data = await response.json();

    res.json(data);
});





app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});


