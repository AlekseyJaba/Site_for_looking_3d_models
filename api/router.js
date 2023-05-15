const express = require('express');
const router = express.Router();
const {Chek_name, Check_Api} = require('./Midlwear')

let client = {};
let com = [];

router.get('/',(req, res) => {
    res.send('<h1>Hello words</h1>')
})

router.get('/stats',(req, res) => {
    let first = `<table><td><tr>Name</tr><tr>Count connect</tr></td>`;
    let secound = '';
    const name = req.headers['user-agent'];
    client[name] ? client[name] += 1 : client[name] = 1;
    for(let key in client){
        secound += `<td><tr> ${key}</tr><tr> ${client[key]}</tr></td>`;
    }
    res.send(first + secound + '</table>');
})

router.post('/comments', Chek_name, (req,res) => {
    let data = (req.body)
    console.log(data.name);
    com.push(data);
    res.send(com)
});

module.exports = router;
