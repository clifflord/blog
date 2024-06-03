require('dotenv').config();

const express = require('express');

const app = express();
const PORT = 5000 || process.env.PORT;

app.get('', (req, res) => {
    res.send("Hello world! This is Pete Branch")
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})