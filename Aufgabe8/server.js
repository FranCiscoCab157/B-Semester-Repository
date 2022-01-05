"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const mongo = require("mongodb");
const hostname = "127.0.0.1"; //#localhost
const port = 3000;
const mongoUrl = "mongodb://localhost:27017"; 
let mongoClient = new mongo.MongoClient(mongoUrl);

async function dbFind(
db, collection, requestObject, response) {
    let result = await mongoClient
        .db(db)
        .collection(collection)
        .find(requestObject)
        .toArray();
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(result));
}
    const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    response.setHeader("Access-Control-Allow-Origin", "*"); 
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) {
    case "/SehenswürdigkeitEvent": {
    await mongoClient.connect();
    switch (request.method) {
    case "GET":
    await dbFind("Pelourinho", "Sehenswürdigkeiten", {
                        index: Number(url.searchParams.get("index")) 
                    }, response);
    break;
    case "POST":
                    let jsonString = "";
                    request.on("data", data => {
                        jsonString += data;
                    });
                    request.on("end", async () => {
                        mongoClient
                            .db("Pelourinho")
                            .collection("Sehenswürdigkeiten")
                            .insertOne(JSON.parse(jsonString));
                    });
    break;
            }
    break;
        }
    case "/SehenswürdigkeitEvents": {
    await mongoClient.connect();
    switch (request.method) {
    case "GET":
    await dbFind("Pelourinho", "Sehenswürdigkeiten", {}, response);
    break;}
    break;
        }
    default:
            response.statusCode = 404;
    }
    response.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
