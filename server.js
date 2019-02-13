const express = require('express');
const app = express();

// 设置静态文件
app.use('/static', express.static('static'));

// 配置跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8848, () => {
    console.log('Example app listening on port 8848!')
});