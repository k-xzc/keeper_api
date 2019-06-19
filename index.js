var port  = process.env.port
var es_host = process.env.es_host
var es_port = process.env.es_port
var es_index = process.env.es_index
var es_type = process.env.es_type
var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var dateFormat = require('dateformat');
var rp = require('request-promise');
app.use(bodyParser.json());
app.use(require('express-promise')());

app.post('/keep_this_data', function (req, res) {
  console.log(req.body)
  postToEs(req.body)
  res.send("done")
})

function postToEs(json) {
  url = "http://" + es_host + ":" + es_port + "/" + es_index + "/" + es_type
  return rp({
        uri: url,
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: json,
        json: true
    })
}

app.listen(port, () => console.log(`listening on port ${port}!`))
