"use strict";
var client;
(function (client) {
    //HTML:
    const table = document.getElementById("GefriergutTabelle");
    var GefriergutListe = [];
    //Server:
    const _url = "http://localhost:3000/";
    const webfunction = "GetGefriergut";
    window.addEventListener("load", () => {
        getGefriergutFromServer();
    });
    async function getGefriergutFromServer() {
        let response = await fetch(_url + webfunction);
        let text = await response.text();
        GefriergutListe = JSON.parse(text);
        console.log(GefriergutListe);
        FülleGefriergutTabelle();
    }
    function FülleGefriergutTabelle() {
        for (const GefriergutTemp of GefriergutListe) {
            console.log(GefriergutTemp);
            let tableRow = document.createElement("tr");
            let Gefriergut = document.createElement("td");
            Gefriergut.textContent = GefriergutTemp.Gefriergut;
            let Ablaufdatum = document.createElement("td");
            Ablaufdatum.textContent = GefriergutTemp.Ablaufdatum;
            tableRow.append(Gefriergut, Ablaufdatum);
            table.append(tableRow);
        }
        /*
 
         let myDate = new Date(Date.now());
         console.log(myDate, new Date());
         
         let trashContainer: HTMLElement = document.createElement("td");
         let trash: HTMLElement = document.createElement("i");
         trash.className = "trash";
 
         table.appendChild(tableRow);
         tableRow.appendChild(Gefriergut);
         tableRow.appendChild(Ablaufdatum);
         tableRow.appendChild(Notizen);
         tableRow.appendChild(trashContainer);
         trashContainer.appendChild(trash);
 
         trash.addEventListener("click", (): void => {
             table.removeChild(tableRow);
         }); */
    }
})(client || (client = {}));
//# sourceMappingURL=client_%C3%9Cbersicht.js.map