"use strict";
var client;
(function (client) {
    //HTML:
    const table = document.getElementById("Tabelle");
    const SehenswuerdigkeitInput = (document.getElementById("Sehenswuerdigkeit"));
    const PreisInput = (document.getElementById("Preis"));
    const DatumInput = (document.getElementById("Datum"));
    const submit = (document.getElementById("submit"));
    //Server:
    const _url = "http://localhost:3000/";
    const portSingle = "SehenswuerdigkeitEvent";
    const portAll = "SehenswuerdigkeitEvents";
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
            createEvent(eventsFromServer[i].Sehenswuerdigkeit, eventsFromServer[i].Preis, eventsFromServer[i].Datum, eventsFromServer[i].Uhrzeit);
        }
    }
    async function onSubmitEvent(event) {
        event.preventDefault();
        let SehenswuerdigkeitEvent = {
            index: eventsFromServer.length - 1,
            Sehenswuerdigkeit: SehenswuerdigkeitInput.value,
            Datum: DatumInput.value.substring(0, 10),
            Uhrzeit: DatumInput.value.substring(11, 16),
            Preis: PreisInput.value
        };
        eventsFromServer.push(SehenswuerdigkeitEvent);
        console.log(SehenswuerdigkeitEvent);
        createEvent(SehenswuerdigkeitEvent.Sehenswuerdigkeit, SehenswuerdigkeitEvent.Preis, SehenswuerdigkeitEvent.Datum, SehenswuerdigkeitEvent.Uhrzeit);
        sendJSONStringWithPost(_url + portSingle, JSON.stringify(SehenswuerdigkeitEvent));
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
    function createEvent(SehenswuerdigkeitText, PreisText, DatumText, UhrzeitText) {
        let tableRow = document.createElement("tr");
        let Sehenswuerdigkeit = document.createElement("td");
        Sehenswuerdigkeit.textContent = SehenswuerdigkeitText;
        let Preis = document.createElement("td");
        Preis.textContent = PreisText;
        let Datum = document.createElement("td");
        Datum.textContent = DatumText;
        let Uhrzeit = document.createElement("td");
        Uhrzeit.textContent = UhrzeitText;
        let trashContainer = document.createElement("td");
        let trash = document.createElement("i");
        trash.className = "trash";
        table.appendChild(tableRow);
        tableRow.appendChild(Sehenswuerdigkeit);
        tableRow.appendChild(Datum);
        tableRow.appendChild(Uhrzeit);
        tableRow.appendChild(Preis);
        tableRow.appendChild(trashContainer);
        trashContainer.appendChild(trash);
        trash.addEventListener("click", () => {
            table.removeChild(tableRow);
        });
    }
    function clearInput() {
        SehenswuerdigkeitInput.value = "";
        PreisInput.value = "";
        DatumInput.value = "";
    }
})(client || (client = {}));
//# sourceMappingURL=client.js.map