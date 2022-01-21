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
            let link = document.createElement("a");
            link.href = "Detailansicht.html?id=" + GefriergutTemp._id;
            let Gefriergut = document.createElement("td");
            Gefriergut.textContent = GefriergutTemp.Gefriergut;
            let Ablaufdatum = document.createElement("td");
            Ablaufdatum.textContent = GefriergutTemp.Ablaufdatum;
            let trashContainer = document.createElement("td");
            let trash = document.createElement("i");
            trash.className = "trash";
            trash.innerHTML = '<button id="submit" type="delete">-</button>';
            link.append(Gefriergut);
            trashContainer.appendChild(trash);
            tableRow.append(link, Ablaufdatum, trashContainer);
            table.append(tableRow);
        }
        /* table.appendChild(tableRow);
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