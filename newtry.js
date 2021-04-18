const cheerio = require("cheerio");
const FormData = require('form-data');
const axios = require("axios");
const qs = require('qs');
const url = require('url');
const { Agent } = require("http");



(async () => {

    const userName = "tomsmit";
    const pass = "SuperSecretPassword!";
    const formData = new FormData();
    formData.append('username', 'tomsmith');
    formData.append('password', 'SuperSecretPassword!');
    const token = Buffer.from(`${userName}:${pass}`, 'utf8').toString('base64')
    agent = {
        'keepAlive': true,

    }
    const Url = "https://the-internet.herokuapp.com/authenticate";
    const params = new url.URLSearchParams({
        "username": userName,
        "password": pass
    });
    const options = {
        method: "POST",
        url: "https://the-internet.herokuapp.com/authenticate",
        port: 443,
        headers: {
            "Authorization": "Basic " + token,
            "Content-Type": "multipart/form-data",
            connection: "alive",
        },
        FormData: {
            "username": userName,
            "password": pass
        },


    };

    await axios(options)
        .then(response => {
            console.log(response)
            console.log(err);

            const { data } = axios.get("https://the-internet.herokuapp.com/secure", {
                headers: {
                    'Cookie': response.headers['set-cookie'],
                    path: 'GET /login HTTP/1.1',
                    'Accept': 'application/json, text/plain',
                    'connection': 'alive',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 Edg/89.0.774.75',
                    'Host': 'the-internet.herokuapp.com',

                    //     'content-type': response.headers['content-type'],
                    //     'x-xss-protection': '1; mode=block',
                    //     'x-content-type-options': response.headers['x-content-type-options'],
                    //     'x-frame-options': response.headers['x-frame-options'],
                    //     'server': 'WEBrick/1.6.0 (Ruby/2.7.2/2020-10-01)',
                    //     connection: 'alive',
                    //     via: '1.1 vegur',
                    //    'async_id_symbol': 57
                }
            });

            let $ = cheerio.load(data);
            console.log("rony")

            $("div[class = 'example']").each((parentIdx, parentElem) => {
                $(parentElem).children().each((childIdx, childElem) => {

                    show = $(childElem).text().trim();

                    console.log(show);
                    console.log('rony');
                })

            });
        });

    // });


})();