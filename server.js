/**
 * Created by alfonsonoriega on 29/5/16.
 */

var http = require("http");
var url = require("url");

function start(route){
    function onRequest( request, response){

        // This will allow us to amp requests to our request handles based on the URL path using
        // router.js
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;

