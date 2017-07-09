var express = require('express')
var app = express()

app.route('/')
    .get(function(req, res){
        var ip = req.headers['x-forwarded-for']||req.ip
        var answer = {
            'ip' : ip,
            // 'headers' : req.headers,
            'language' : req.headers['accept-language'].split(',')[0],
            'OS' : req.headers['user-agent'].split('(')[1].split(')')[0]
        }
        res.json(answer)
    })
    
var port = process.env.Port||3000
app.listen(port , function() {
    console.log('Node.js listening on port ' + port);
})