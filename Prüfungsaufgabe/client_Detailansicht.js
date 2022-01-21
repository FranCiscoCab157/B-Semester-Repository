"use strict";
var client;
(function (client) {
    //HTML:
    var Gefriergut_Feld = null;
    var Ablaufdatum_Feld = null;
    var Notiz_Feld = null;
    var Anlegedatum_Feld = null;
    var Gefriergut_Element = null;
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
        Gefriergut_Element = JSON.parse(text);
        console.log(Gefriergut_Element);
        FülleGefriergutFelder();
    }
    function FülleGefriergutFelder() {
        Gefriergut_Feld.textContent = Gefriergut_Element.Gefriergut;
        Ablaufdatum_Feld.textContent = Gefriergut_Element.Ablaufdatum;
        Notiz_Feld.textContent = Gefriergut_Element.Notiz;
        Anlegedatum_Feld.textContent = Gefriergut_Element.Anlegedatum;
    }
})(client || (client = {}));
//# sourceMappingURL=client_Detailansicht.js.map