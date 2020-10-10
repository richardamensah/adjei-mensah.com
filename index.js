import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) =>
    res.send(`<h1>Node and express server running on Port ${PORT}</h1>`)
);

app.listen(PORT, () =>
    console.log(`Your server is RUNNING on ${PORT}`));