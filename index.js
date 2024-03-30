import express from 'express';
import fs from 'fs';

const PORT = 5000;
const app = express();
app.get('/movie', (req, res) => {
    // res.send(movie)
    fs.readFile('./movie.json', (err, data) => {
        if(err) {
            console.log("Failed to get data", err);
        }
        else{
            res.send(JSON.parse(data))
        }
    });
});

app.listen(PORT, () => console.log(`Server is listining on port , ${PORT}`));