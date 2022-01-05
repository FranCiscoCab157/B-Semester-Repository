"use strict";
var script;
(function (script) {
    const table = document.getElementById("Tabelle");
    const SehenswürdigkeitInput = (document.getElementById("Sehenswürdigkeit"));
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
        createEvent(SehenswürdigkeitInput.value, preisInput.value, datumInput.value.substring(0, 10), datumInput.value.substring(11, 16), true);
        setTimeout(function () {
            clearInput();
        }, 100);
    });
    function createEvent(SehenswürdigkeitText, preisText, datumText, SehenswürdigkeitText, save) {
        let tabellenEintrag = document.createElement("tr");
        let Sehenswürdigkeit = document.createElement("td");
        Sehenswürdigkeit.textContent = SehenswürdigkeitText;
        let preis = document.createElement("td");
        preis.textContent = preisText;
        let datum = document.createElement("td");
        datum.textContent = datumText;
        let löschZeile = document.createElement("td");
        let löschButton = document.createElement("button");
        löschButton.innerHTML = "Löschen";
        table.appendChild(tabellenEintrag);
        tabellenEintrag.appendChild(Sehenswürdigkeit);
        tabellenEintrag.appendChild(preis);
        tabellenEintrag.appendChild(datum);
        tabellenEintrag.appendChild(löschZeile);
        löschZeile.appendChild(löschButton);
        if (save) {
            let saveRow = {
                Sehenswürdigkeit: tabellenEintrag.textContent,
                preis: preis.textContent,
                datum: datum.textContent,
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
        SehenswürdigkeitInput.value = "";
        preisInput.value = "";
        datumInput.value = "";
    }
    function loadTable() {
        if (localStorage.length < 1)
            return;
        loadRows = JSON.parse(localStorage.getItem("savedRows"));
        console.log(loadRows);
        for (let i = 0; i < loadRows.length; i++) {
            createEvent(loadRows[i].Sehenswürdigkeit, loadRows[i].preis, loadRows[i].datum, false);
        }
        rows = loadRows;
        loadRows = [];
    }
})(script || (script = {}));
//# sourceMappingURL=script.js.map