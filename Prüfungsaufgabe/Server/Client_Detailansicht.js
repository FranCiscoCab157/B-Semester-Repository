"use strict";
var client;
(function (client) {
    //HTML:
    const table = document.getElementById("GefriergutTabelle");
    var Gefriergut_Feld = null;
    var Ablaufdatum_Feld = null;
    var Notiz_Feld = null;
    var Anlegedatum_Feld = null;
    var GefriergutListe = [];
    //Server:
    const _url = "http://localhost:3000/";
    const webfunction = "GetGefriergut_Detail";
    window.addEventListener("load", () => {
        Gefriergut_Feld = (document.getElementById("Gefriergut_Feld"));
        Ablaufdatum_Feld = (document.getElementById("Ablaufdatum_Feld"));
        Notiz_Feld = (document.getElementById("Notiz_Feld"));
        Anlegedatum_Feld = (document.getElementById("Anlegedatum_Feld"));
        getGefriergutFromServer();
    });
    async function getGefriergutFromServer() {
        var parameter = window.location.search;
        let response = await fetch(_url + webfunction + parameter);
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
    }
})(client || (client = {}));
//# sourceMappingURL=client_Detailansicht.js.map