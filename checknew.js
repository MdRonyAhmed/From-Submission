const FormData = require('form-data');
const request = require('request');
var EventEmitter = require("events").EventEmitter;


var body = new EventEmitter();
const userName = "tomsmith";
const pass = "SuperSecretPassword!";


const token = Buffer.from(`${userName}:${pass}`, 'utf8').toString('base64')
const options = {
    method: "POST",
    url: "https://the-internet.herokuapp.com/authenticate",
    port: 443,
    headers: {
        "Authorization": "Basic" + token,
        "Content-Type": "multipart/form-data",
        connection: "alive",
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 Edg/89.0.774.75',
    },
    FormData : {
        username: userName,
        password: pass
    },
       

};

request(options, function (err, res, body) {
    console.log(res)

    const option = {
        method: "GET",
        url: "https://the-internet.herokuapp.com/secure",
        port: 443,
        headers: {
            Authorization :"Basic" + token ,
            // toJSON: res.toJSON,
            "Content-Type": res.headers['content-type'],
            connection: "alive",
            Cookie :res.headers['set-cookie']  ,
            location: 'https://the-internet.herokuapp.com/login',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 Edg/89.0.774.75',

        },
    
    };

    request(option,function(err,response,body){
        console.log(body);
    })
    
});