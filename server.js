const express = require('express');
const vueLoader = require('vue-loader');

const app = express();

// 设置静态文件
app.use('/static', express.static('/static'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8848, () => {
    console.log('Example app listening on port 8848!')
});