const fs = require("fs/promises");
const express = require('express');
var boxOfficeMojoMovie = require('box-office-mojo-movie');
const app = express();
const PORT = 8080;
const cors = require("cors");
app.use(express.json());
app.use(cors());


app.get('/getBoxOffice/:movieName', async (req, res) => {
    const movieName = req.params.movieName;
    try {
        res.json({
            content: (await boxOfficeMojoMovie(`${movieName}.htm`))
        })
    } catch (err) {
        res.sendStatus(404);
    }

});

app.listen(
    PORT,
    () => console.log(`it's alive on  http://localhost:${PORT}`)
)
