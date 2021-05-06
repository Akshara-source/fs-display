var http = require('http');//require module http
var fs = require('fs');//require file system
const port = process.env.PORT || 3000;


http.createServer(function (req, res) {
    fs.readFile('notes.html','utf8',function(err,data){
       

        var result = data.replace(/heading/g, 'my profile').replace(/name_value/g, 'akshara').replace(/age_value/g, '25').replace(/company_value/g, 'Toobler Technologies');

            
    fs.writeFile('notes.html', result, 'utf8', function (err,result) {
        if (err) return console.log(err);

     });

     fs.readFile('notes.html','utf8',function(err,data){
         res.write(data);
         res.end();
     })

       

    })
    
}).listen(port);


// fs.readFile('notes.html','utf8',function(err,data){

//     var result = data.replace(/replacement/, 'aksharaaaaaa');

//     fs.writeFile('notes.html', result, 'utf8', function (err) {
//         if (err) return console.log(err);
//      });

//     // res.write(dynamicContent);

//     return res.end();

// })


  




