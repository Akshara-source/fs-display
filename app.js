var http = require('http');//require module http
var fs = require('fs');//require file system
const port = process.env.PORT || 3000;


http.createServer(function (req, res) {
    fs.readFile('notes.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    
}).listen(port);



