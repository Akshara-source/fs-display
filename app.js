var http = require('http');//require module http
var fs = require('fs');//require file system
const port = process.env.PORT || 3000;


http.createServer(function (req, res) {
    fs.readFile('notes.json',function(err,data){
        const heading = "My Profile";

        const datastring = data.toString();
        const dataObj = JSON.parse(datastring)

        const dynamicContent = '<!DOCTYPE html>'
        + '<html><head></head><body><h1>'+heading+'</h1><p>Name:'+dataObj.name+'</p><p>Age:'+dataObj.age+'</p><p>company:'+dataObj.company+'</p></body></html>';

        res.write(dynamicContent);

        return res.end();

    })
    
}).listen(port);





