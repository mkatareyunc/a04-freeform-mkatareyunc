import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3000;

let apiKey = "OE3QMiCmkPmQSOa8rodNJnOssK4qYvzve4izCRtr";

app.use(cors());

app.get('/apod', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching astronomy picture of the day:', error);
        res.status(500).json({ error: 'An error occurred while fetching astronomy picture of the day' });
    }
});

app.get('/jotd', async (req, res) => {
    try {
        const joke_response = await axios.get(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,explicit&type=single`);
        res.json(joke_response.data);
    } catch (error) {
        console.error('Error fetching joke:', error);
        res.status(500).json({ error: 'An error occurred while fetching a joke' });
    }
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })