var http = require("http");
http.createServer(function (request, response) {
	var t = function(response,request){
   console.log(request);
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');};
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   sendRes(response,request,t)
   
   }).listen(900);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

function sendRes(response,request,resFunc){


   resFunc(response,request);
}