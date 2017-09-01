var request = require('request');
var fs = require('fs');

var url = "http://api.citybik.es/v2/networks"

request({
    url: url,
    json: true
}, function (error, response, body) {
  var stringify = JSON.stringify(body);
    fs.writeFile("seed/seed.txt",stringify, function(err) {
      if(err) {
        return console.log(err);
      }
    })
    if (!error && response.statusCode === 200) {
        console.log(body);
    }
})
