

var http = require('http');
var server = http.createServer()
server.listen(9000)

var messages = [{message: "Hi"}, {message: "Thank you"}];

server.on('request', function(request, response){
  response.writeHead(200, {
  'Connection': 'close',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
});
if (request.method === 'OPTIONS'){
  response.end();
}



  if (request.method == 'GET'){
  response.end(JSON.stringify(messages));
}

  if (request.method == 'POST') {
     var postData = '';
     request.on('data', function(chunk) {
         postData += chunk.toString();
      });
      request.on('end', function() {
          console.log("Got POST data:");
          console.log(JSON.parse(postData));
          console.log(messages)
          messages.push(JSON.parse(postData))
          response.end(JSON.stringify(messages))

     });
  }

});
