namespace client {
    
    //HTML:
    const table: HTMLElement = document.getElementById("table");
    const SehenswürdigkeitInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("Sehenswürdigkeit"));
    const PreisInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("Preis"));
    const DatumInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("Datum"));
    const submit: HTMLButtonElement = <HTMLButtonElement>(document.getElementById("submit"));


    
    //Server:
    const _url: string = "http://localhost:3000/";
    const portSingle: string = "SehenswürdigkeitEvent";
    const portAll: string = "SehenswürdigkeitEvents";

    interface SehenswürdigkeitEvent {
        index: number;
        Sehenswürdigkeit: string; 
        Preis: string;
        Datum: string;
        Uhrzeit: string;
       
    }
    let eventsFromServer: SehenswürdigkeitEvent[] = [];

    window.addEventListener("load", () => {
        getEventsFromServer();
    });
    submit.addEventListener("click", onSubmitEvent);


    async function getEventsFromServer(): Promise<void> {
        let response: Response = await fetch(_url + portAll);
        let text: string = await response.text();
        eventsFromServer = JSON.parse(text);
        console.log(eventsFromServer);

 for (let i: number = 0; i < eventsFromServer.length; i++) {
            createEvent(eventsFromServer[i].Sehenswürdigkeit, eventsFromServer[i].Preis, 
                        eventsFromServer[i].Datum, eventsFromServer[i].Uhrzeit);
        }
    }

    async function onSubmitEvent(event: Event): Promise<void> {
        event.preventDefault();

        let SehenswürdigkeitEvent: SehenswürdigkeitEvent = {
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
        },         100);
    }

    async function sendJSONStringWithPost(url: RequestInfo, jsonString: string): Promise<void> {
        await fetch(url, {
            method: "POST",
            body: jsonString
        });
        console.log("event sent");
    }

   
    function createEvent(SehenswürdigkeitText: string, PreisText: string, DatumText: string, UhrzeitText: string): void {
        let tableRow: HTMLElement = document.createElement("tr");
        let Sehenswürdigkeit: HTMLElement = document.createElement("td");
        Sehenswürdigkeit.textContent = SehenswürdigkeitText;
        let Preis: HTMLElement = document.createElement("td");
        Preis.textContent = PreisText;
        let Datum: HTMLElement = document.createElement("td");
        Datum.textContent = DatumText;
        let Uhrzeit: HTMLElement = document.createElement("td");
        Uhrzeit.textContent = UhrzeitText;
        let trashContainer: HTMLElement = document.createElement("td");
        let trash: HTMLElement = document.createElement("i");
        trash.className = "trash";

        table.appendChild(tableRow);
        tableRow.appendChild(Sehenswürdigkeit);
        tableRow.appendChild(Datum);
        tableRow.appendChild(Uhrzeit);
        tableRow.appendChild(Preis);
        tableRow.appendChild(trashContainer);
        trashContainer.appendChild(trash);

        trash.addEventListener("click", (): void => {
            table.removeChild(tableRow);
        });
    }

    function clearInput(): void {
        SehenswürdigkeitInput.value = "";
        PreisInput.value = "";
        DatumInput.value = "";
    }
}