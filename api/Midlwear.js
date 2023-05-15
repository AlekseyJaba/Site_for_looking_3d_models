const helmet = require('helmet');
const morgan = require('morgan');

const hell = helmet();
const morg = morgan('tiny');

function Err_road(req, res, next){
    console.log('Error! Bad Query');
    res.status(400)
        .send('Bad Query!');
    next();
}

function Chek_name(req, res, next){
    let data = req.body;
    let name = data.name.toString();
    let symbol = '1234567890!@#$%^&*()"№;:?-=,/|';
    for(let i in name){
        for(let j in symbol){
            if(name[i] === symbol[j]){
                console.log('Error! Please write the name without these symbols: \n 1234567890!@#$%^&*()"№;:?-=,/|')
                break;
            }
        }
    }
    next()
}

function Check_Api(req, res, next) {
    let date = req.headers.api_key;
    if(date.toString()!=="124254" ){
        console.log("Ошибка пользовательского подключения")
        res.status(400).send("Error API Connection")
    }
    next()
}

module.exports = {
    Err_road,
    Chek_name,
    Check_Api,
    hell,
    morg
}
