import * as http from "http";
import * as mongo from "mongodb";

const hostname: string = "127.0.0.1"; // localhost
const port: number = 3000;
const mongoUrl: string = "mongodb://localhost:27017";
let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);
async function dbFindone(

  db: string,
  collection: string,
  requestObject: any,
  response: http.ServerResponse) {

  let result: any = await mongoClient
    .db(db)
    .collection(collection)
    .findOne(requestObject)

  response.setHeader("Content-Type", "application/json");
  response.write(JSON.stringify(result));
}

async function dbdeleteone(

  db: string,
  collection: string,
  requestObject: any,
  response: http.ServerResponse) {

  let result: any = await mongoClient
    .db(db)
    .collection(collection)
    .deleteOne(requestObject)

  response.write("Okay");
}







async function dbFind(

  db: string,
  collection: string,
  requestObject: any,
  response: http.ServerResponse) {

  let result: mongo.WithId<mongo.Document>[] = await mongoClient
    .db(db)
    .collection(collection)
    .find(requestObject)
    .toArray();

  response.setHeader("Content-Type", "application/json");
  response.write(JSON.stringify(result));
}

async function dbInsert(

  db: string,
  collection: string,
  requestObject: any,
  response: http.ServerResponse
) {
  requestObject.Anlegedatum = new Date();
  await mongoClient

    .db(db)
    .collection(collection)
    .insertOne(requestObject)
    .then(function (result) {
      console.log(result)
    });

}

const server: http.Server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {

    response.statusCode = 200;
    response.setHeader("Access-Control-Allow-Origin", "*");

    let url: URL = new URL(request.url || "", `http://${request.headers.host}`);
    console.log(url.pathname)

    switch (url.pathname) {
      case "/GetGefriergut": {
        await mongoClient.connect();

        if (request.method == "GET") {
          await dbFind(
            "Gefriergut",
            "Hinzufügen",
            { index: Number(url.searchParams.get("index")) },

            response
          );
        }
        break
      };

      case "/GetGefriergut_Detail": {
        await mongoClient.connect();

        if (request.method == "GET") {

          let o_id = new mongo.ObjectId(url.searchParams.get("id"));
          console.log(o_id)

          await dbFindone(
            "Gefriergut",
            "Hinzufügen",
            { _id: o_id },


            response
          );


        }




        break


      }

      case "/addGefriergut": {

        await mongoClient.connect();

        if (request.method == "POST") {

          let jsonString: string = "";
          request.on("data", data => {
            jsonString += data;
          });

          request.on("end", async () => {
            console.log(jsonString)
            await dbInsert(
              "Gefriergut",
              "Hinzufügen",
              JSON.parse(jsonString),
              response
            );
          });
        }
        break
      }

      case "/deleteGefriergut": {

        await mongoClient.connect();

        if (request.method == "GET") {


          let o_id = new mongo.ObjectId(url.searchParams.get("id"));
          console.log("Achtung Element wird gelöscht!:", o_id);

          await dbdeleteone(
            "Gefriergut",
            "Hinzufügen",
            { _id: o_id },
            response
          );
        }
        break
      }


      default:
        response.statusCode = 404;
    }
    response.end();
  }
);






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