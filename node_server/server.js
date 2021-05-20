const express = require('express')
const app = express()
const url = require('url');
const xiniu = require('./js/xiniudata/xiniudata')
const gee = require('./js/gee/insight')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/xiniu/payload', async (req, res) => {
    let query = url.parse(req.url, true).query
    console.log("烯牛数据, 加密前:", query.e);
    let x = xiniu.xiniu_get_payload(query.e)
    console.log("烯牛数据, 加密后:", x)
    res.send(x)
})

app.post('/xiniu/jiemi', async (req, res) => {
    console.log("烯牛数据, 解密前:", req.body.e);
    let x = xiniu.xiniu_jiemi(req.body.e)
    console.log("烯牛数据, 解密后:", x)
    res.send(x)
})

app.get('/geew', async (req, res) => {
    let query = url.parse(req.url, true).query
    console.log("极验 w, 加密前:", query.e);
    let x = gee.get_w(query.e)
    console.log("极验 w, 加密后:", x)
    res.send(x)
})

app.listen(4040, () => {
    console.log('server is running on 4040');
})

// npm 
// node server.js