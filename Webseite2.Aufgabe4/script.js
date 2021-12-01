"use strict";
var script;
(function (script) {
    const table = document.getElementById("Tabelle");
    const sehenswürdigkeitInput = (document.getElementById("Sehenswürdigkeit"));
    const preisInput = (document.getElementById("Preis"));
    const datumInput = (document.getElementById("Datum"));
    const submit = (document.getElementById("submit"));
    const clear = (document.getElementById("clear"));
    let rows = [];
    let loadRows = [];
    let savedRows;
    window.addEventListener("load", () => {
        loadTable();
    });
    submit.addEventListener("click", () => {
        console.log("test");
        createEvent(sehenswürdigkeitInput.value, preisInput.value, datumInput.value.substring(0, 10), datumInput.value.substring(11, 16), true);
        setTimeout(function () {
            clearInput();
        }, 100);
    }); 
    function createEvent(sehenswürdigkeitText, preisText, datumText, uhrzeitText, save) {
        let tabellenEintrag = document.createElement("tr");
        let sehenswürdigkeit = document.createElement("td");
        sehenswürdigkeit.textContent = sehenswürdigkeitText;
        let preis = document.createElement("td");
        preis.textContent = preisText;
        let datum = document.createElement("td");
        datum.textContent = datumText;
        let uhrzeit = document.createElement("td");
        uhrzeit.textContent = uhrzeitText;
        let löschZeile = document.createElement("td");
        let löschButton = document.createElement("button");
        löschButton.innerHTML = "LÖSCHEN";
        table.appendChild(tabellenEintrag);
        tabellenEintrag.appendChild(sehenswürdigkeit);
        tabellenEintrag.appendChild(preis);
        tabellenEintrag.appendChild(datum);
        tabellenEintrag.appendChild(uhrzeit);
        tabellenEintrag.appendChild(löschZeile);
        löschZeile.appendChild(löschButton);
        if (save) {
            let saveRow = {
                sehenswürdigkeit: tabellenEintrag.textContent,
                preis: preis.textContent,
                datum: datum.textContent,
                uhrzeit: uhrzeit.textContent
            };
            rows.push(saveRow);
            savedRows = JSON.stringify(rows);
            console.log(savedRows);
            localStorage.setItem("savedRows", savedRows);
        }
        löschButton.addEventListener("click", () => {
            table.removeChild(tabellenEintrag);
        });
    }
    function clearInput() {
        sehenswürdigkeitInput.value = "";
        preisInput.value = "";
        datumInput.value = "";
    }
    function loadTable() {
        if (localStorage.length < 1)
            return;
        loadRows = JSON.parse(localStorage.getItem("savedRows"));
        console.log(loadRows);
        for (let i = 0; i < loadRows.length; i++) {
            createEvent(loadRows[i].sehenswürdigkeit, loadRows[i].preis, loadRows[i].datum, loadRows[i].uhrzeit, false);
        }
        rows = loadRows;
        loadRows = [];
    }
})(script || (script = {}));
//# sourceMappingURL=script.js.map