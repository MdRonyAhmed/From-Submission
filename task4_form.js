const axios = require("axios")


Url = 'https://example.com/';

(async () => {

   await axios.post(ur = Url, data = {
        "username": "username",
        "password": "password"
    },{headers:{
        // "Content-Type": "application/x-www-form-urlencoded",
        // "etag": "3147526947+gzip",
        // "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36 Edg/89.0.774.77"
    }})
        .then((res) => {
            console.log(res);

        })
        .catch(err => {
            console.log("Something went wrong");
        })

})();