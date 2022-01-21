"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const mongo = require("mongodb");
const hostname = "127.0.0.1"; // localhost
const port = 3000;
const mongoUrl = "mongodb://localhost:27017";
let mongoClient = new mongo.MongoClient(mongoUrl);
async function dbFindone(db, collection, requestObject, response) {
    let result = await mongoClient
        .db(db)
        .collection(collection)
        .findOne(requestObject);
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(result));
}
async function dbFind(db, collection, requestObject, response) {
    let result = await mongoClient
        .db(db)
        .collection(collection)
        .find(requestObject)
        .toArray();
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(result));
}
async function dbInsert(db, collection, requestObject, response) {
    requestObject.Anlegedatum = new Date();
    await mongoClient
        .db(db)
        .collection(collection)
        .insertOne(requestObject)
        .then(function (result) {
        console.log(result);
    });
}
const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    response.setHeader("Access-Control-Allow-Origin", "*");
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    console.log(url.pathname);
    switch (url.pathname) {
        case "/GetGefriergut":
            {
                await mongoClient.connect();
                if (request.method == "GET") {
                    await dbFind("Gefriergut", "Hinzufügen", { index: Number(url.searchParams.get("index")) }, response);
                }
                break;
            }
            ;
        case "/GetGefriergut_Detail": {
            await mongoClient.connect();
            if (request.method == "GET") {
                var o_id = new mongo.ObjectId(url.searchParams.get("id"));
                console.log(o_id);
                await dbFindone("Gefriergut", "Hinzufügen", { _id: o_id }, response);
            }
            break;
        }
        case "/addGefriergut": {
            await mongoClient.connect();
            if (request.method == "POST") {
                let jsonString = "";
                request.on("data", data => {
                    jsonString += data;
                });
                request.on("end", async () => {
                    console.log(jsonString);
                    await dbInsert("Gefriergut", "Hinzufügen", JSON.parse(jsonString), response);
                });
            }
            break;
        }
        default:
            response.statusCode = 404;
    }
    response.end();
});
/*


        }




      }


        break;
      case "POST":

        let jsonString: string = "";
        request.on("data", data => {
          jsonString += data;
        });
        request.on("end", async () => {
          mongoClient
            .db("Gefriergut")
            .collection("Hinzufügen")
            .insertOne(JSON.parse(jsonString));
        });
        break;

    }
    break;
  }

      
      case "/GefriergutEvents": {
  await mongoClient.connect();
  switch (request.method) {
    case "GET":
      await dbFind("Gefriergut", "Hinzufügen", {}, response);
      break;
  }
  break;
}
      default:
response.statusCode = 404;
    }
response.end();
  }
);*/
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// node ./Server/server.js
//# sourceMappingURL=server.js.map