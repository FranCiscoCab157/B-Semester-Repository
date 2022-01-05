"use strict";
var client;
(function (client) {
    //HTML:
    
        const table = document.getElementById("table");
        const SehenswürdigkeitInput = (document.getElementById("Sehenswürdigkeit"));
        const PreisInput = (document.getElementById("Preis"));
        const DatumInput = (document.getElementById("Datum"));
        const submit = (document.getElementById("submit"));
  
    //Server:

        const _url = "http://localhost:3000/";
        const portSingle = "SehenswürdigkeitEvent";
        const portAll = "SehenswürdigkeitEvents";
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
            createEvent(eventsFromServer[i].Sehenswürdigkeit, eventsFromServer[i].Preis, eventsFromServer[i].Datum, eventsFromServer[i].Uhrzeit);
        }
    }
    async function onSubmitEvent(event) {
        event.preventDefault();
        let SehenswürdigkeitEvent = {
            index: eventsFromServer.length - 1,
            Sehenswürdigkeit: SehenswürdigkeitInput.value,
            Datum: DatumInput.value.substring(0, 10),
            Uhrzeit: DatumInput.value.substring(11, 16),
            Preis: PreisInput.value
        };
        eventsFromServer.push(SehenswürdigkeitEvent);
        console.log(SehenswürdigkeitEvent);
        createEvent(SehenswürdigkeitEvent.Sehenswürdigkeit, SehenswürdigkeitEvent.Preis, SehenswürdigkeitEvent.Datum, SehenswürdigkeitEvent.Uhrzeit);
        sendJSONStringWithPost(_url + portSingle, JSON.stringify(SehenswürdigkeitEvent));
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

    function createEvent(SehenswürdigkeitText, PreisText, DatumText, UhrzeitText) {
        let tableRow = document.createElement("tr");
        let Sehenswürdigkeit = document.createElement("td");
        Sehenswürdigkeit.textContent = SehenswürdigkeitText;
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
        tableRow.appendChild(Sehenswürdigkeit);
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
        SehenswürdigkeitInput.value = "";
        PreisInput.value = "";
        DatumInput.value = "";
    }
})(client || (client = {}));
