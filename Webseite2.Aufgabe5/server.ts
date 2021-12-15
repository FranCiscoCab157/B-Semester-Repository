import * as http from "http";



const hostname: string = "127.0.0.1"; 
const port: number = 3000;

const server: http.Server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
      

      response.statusCode = 200; 

      response.setHeader("Content-Type", "text/plain"); 
      response.setHeader("Access-Control-Allow-Origin", "*"); 
      

      let url: URL = new URL(request.url || "", `http://${request.headers.host}`); 
      switch (url.pathname) { 
        case "/":
          response.write("Server erreichbar");
          break;
        case "/convertDate":
          let sentDate: string = url.searchParams.get("date") || ""; 
          response.end(sentDate(Date)); 
          break;
        default:
          response.statusCode = 404; 
      }  
      response.end(); 
    }
);

function sentDate(date: string): string {
  let month: string;

  switch(date.substring(6, 8)){
    case "01":
      month="january";
      break;
    case "02":
      month="february";
      break;
    case "03":
      month="march";
      break;
    case "04":
       month="april";
       break;
    case "05":
       month="may";
       break;
    case "06":
        month="june";
        break;
    case "07":
        month="july";
    case "08":
        month="august";
        break;
    case "09":
        month="september";
        break;
    case "10":
        month="october";
        break;
    case "11":
        month="november";
        break;
    case "12":
        month="december";
        break;
  }
  
  return "Day: " + date.substring(9, 11) + ", " + "Month: " + month + ", " + "Year: " + date.substring(1, 5);
}
  

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});