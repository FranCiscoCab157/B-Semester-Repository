"use strict";
var client;
(function (client) {
    //HTML:
    const table = document.getElementById("Tabelle");
    const GefriergutInput = (document.getElementById("Gefriergut"));
    const AblaufdatumInput = (document.getElementById("Ablaufdatum"));
    const submit = (document.getElementById("submit"));
    //Server:
    const _url = "http://localhost:3000/";
    const portSingle = "GefriergutEvent";
    const portAll = "GefriergutEvents";
    let eventsFromServer = [];
    window.addEventListener("load", () => {
        getEventsFromServer();
    });
    submit.addEventListener("click", onSubmitEvent);
    async function getEventsFromServer() {
        let response = await fetch(_url + portAll);
        let text = await response.text();
        eventsFromServer = JSON.parse(text);
        console.log(eventsFromServer);
        for (let i = 0; i < eventsFromServer.length; i++) {
            createEvent(eventsFromServer[i].Gefriergut, eventsFromServer[i].Ablaufdatum);
        }
    }
    async function onSubmitEvent(event) {
        event.preventDefault();
        let GefriergutEvent = {
            index: eventsFromServer.length - 1,
            Gefriergut: GefriergutInput.value,
            Ablaufdatum: AblaufdatumInput.value
        };
        eventsFromServer.push(GefriergutEvent);
        console.log(GefriergutEvent);
        createEvent(GefriergutEvent.Gefriergut, GefriergutEvent.Ablaufdatum);
        sendJSONStringWithPost(_url + portSingle, JSON.stringify(GefriergutEvent));
        setTimeout(() => {
            clearInput();
        }, 100);
    }
    async function sendJSONStringWithPost(url, jsonString) {
        await fetch(url, {
            method: "POST",
            body: jsonString
        });
        console.log("event sent");
    }
    function createEvent(GefriergutText, AblaufdatumText) {
        let tableRow = document.createElement("tr");
        let Gefriergut = document.createElement("td");
        Gefriergut.textContent = GefriergutText;
        let Ablaufdatum = document.createElement("td");
        Ablaufdatum.textContent = AblaufdatumText;
        let trashContainer = document.createElement("td");
        let trash = document.createElement("i");
        trash.className = "trash";
        table.appendChild(tableRow);
        tableRow.appendChild(Gefriergut);
        tableRow.appendChild(Ablaufdatum);
        tableRow.appendChild(trashContainer);
        trashContainer.appendChild(trash);
        trash.addEventListener("click", () => {
            table.removeChild(tableRow);
        });
    }
    function clearInput() {
        GefriergutInput.value = "";
        AblaufdatumInput.value = "";
    }
})(client || (client = {}));
//# sourceMappingURL=client.js.map