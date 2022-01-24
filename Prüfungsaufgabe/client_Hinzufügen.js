"use strict";
var client;
(function (client) {
    //HTML:
    let GefriergutInput = null;
    let AblaufdatumInput = null;
    let NotizenInput = null;
    let KategorieInput = null;
    let submit = null;
    //Server:
    const _url = "http://localhost:3000/";
    const webfunction = "addGefriergut";
    window.addEventListener("load", () => {
        GefriergutInput = (document.getElementById("Gefriergut"));
        AblaufdatumInput = (document.getElementById("Ablaufdatum"));
        NotizenInput = (document.getElementById("Notizen"));
        KategorieInput = (document.getElementById("Kategorie"));
        submit = (document.getElementById("submit"));
        submit.addEventListener("click", neuesGefriergut);
    });
    async function neuesGefriergut(event) {
        event.preventDefault();
        let GefriergutAdd = {
            index: 0,
            Gefriergut: "",
            Ablaufdatum: "",
            Notiz: "",
            Anlegedatum: "",
            Kategorie: 1
        };
        GefriergutAdd.Gefriergut = GefriergutInput.value;
        GefriergutAdd.Ablaufdatum = AblaufdatumInput.value;
        GefriergutAdd.Notiz = NotizenInput.value;
        GefriergutAdd.Kategorie = (KategorieInput.selectedIndex);
        sendJSONStringWithPost(_url + webfunction, JSON.stringify(GefriergutAdd));
    }
    async function sendJSONStringWithPost(url, jsonString) {
        await fetch(url, {
            method: "POST",
            body: jsonString
        });
        console.log("event sent");
    }
})(client || (client = {}));
//# sourceMappingURL=client_Hinzuf%C3%BCgen.js.map