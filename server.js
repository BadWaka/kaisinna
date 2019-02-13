const express = require('express');
const app = express();

// 配置跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 设置静态文件
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8848, () => {
    console.log('Example app listening on port 8848!')
});