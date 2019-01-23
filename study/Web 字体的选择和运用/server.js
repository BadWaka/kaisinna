const express = require('express');

const app = express();
const port = 3000;

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
});