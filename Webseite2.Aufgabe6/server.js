"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var hostname = "127.0.0.1";
var port = 3000;
var server = http.createServer(function(request, response) => {
    
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Access-Control-Allow-Origin", "*");
    var url = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) {
        var "/":
            response.write("Server erreichbar");
            break;
        var "/convertDate":
            var date = url.searchParams.get("date") || "";
            response.end(convertDate(date));
            break;
        default:
            response.statusCode = 404;
    }
    response.end();
});
function convertAndPrintDate(date) {
    return "Day: " + date.substring(9, 11) + ", " + "Month: " + date.substring(6, 8) + ", " + "Year: " + date.substring(1, 5);
}
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map