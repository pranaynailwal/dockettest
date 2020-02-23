var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var server = http.createServer(function(req, res){
	
	var q = url.parse(req.url, true);
	var action = q.pathname;
	var formData = '';
	req.setEncoding('utf8');
	if(action === '/authentication' && req.method === 'POST'){
		req.on('data', function(chunk){
			formData +=chunk;
		});
		req.on('end', function(){
			formData= qs.parse(formData);
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write("<!DOCTYPE html> <html> You are trying to login with id : "+formData.user_id+" with password : "+formData.password+"</html>");
			res.end();
		});
	}else{
		fs.readFile('login.html', function(err, data){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		});
	}
}).listen(9090);
console.log('connection started at port no. 8080. hit http://localhost:9090');