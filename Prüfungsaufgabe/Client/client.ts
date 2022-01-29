/*namespace client {

    //HTML:
    const table: HTMLElement = document.getElementById("Tabelle");
    const GefriergutInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("Gefriergut"));
    const AblaufdatumInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("Ablaufdatum"));
    const NotizenInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("Notizen"));
    var submit: HTMLButtonElement = null;// <HTMLButtonElement>(document.getElementById("submit"));




    //Server:

    const _url: string = "http://localhost:3000/";
    const portSingle: string = "GefriergutEvent";
    
    const portAll: string = "GefriergutEvents";

    interface GefriergutEvent {
        index: number;
        Gefriergut: string; 
        Ablaufdatum: Date;
        Notizen: string;
       
    }
    let eventsFromServer: GefriergutEvent[] = [];

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
            createEvent(eventsFromServer[i].Gefriergut, eventsFromServer[i].Ablaufdatum);
        
        }
    }

    async function onSubmitEvent(event: Event): Promise<void> {
        event.preventDefault();

        let GefriergutEvent: GefriergutEvent = {
            index: eventsFromServer.length - 1,
            Gefriergut: GefriergutInput.value,
            Ablaufdatum: AblaufdatumInput.value,
            Notizen: NotizenInput.value
        };
        eventsFromServer.push(GefriergutEvent);
        console.log(GefriergutEvent);

        createEvent(GefriergutEvent.Gefriergut, GefriergutEvent.Ablaufdatum, GefriergutEvent.Notizen);

        sendJSONStringWithPost(_url + portSingle, JSON.stringify(GefriergutEvent));

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

   
    function createEvent(GefriergutText: string, AblaufdatumDate: Date, NotizenText: string ): void {
        let tableRow: HTMLElement = document.createElement("tr");
       
        let Gefriergut: HTMLElement = document.createElement("td");
        Gefriergut.textContent = GefriergutText;
        
        let Ablaufdatum: HTMLElement = document.createElement("td");
        Ablaufdatum.textContent = AblaufdatumDate;
        
        let Notizen: HTMLElement = document.createElement("td");
        Notizen.textContent = NotizenText;

        let myDate = new Date(Date.now());
        console.log(myDate, new Date());
        
        let trashContainer: HTMLElement = document.createElement("td");
        let trash: HTMLElement = document.createElement("i");
        trash.className = "trash";

        table.appendChild(tableRow);
        tableRow.appendChild(Gefriergut);
        tableRow.appendChild(Ablaufdatum);
        tableRow.appendChild(Notizen);
        tableRow.appendChild(trashContainer);
        trashContainer.appendChild(trash);

        trash.addEventListener("click", (): void => {
            table.removeChild(tableRow);
        });
    }

    function clearInput(): void {
        GefriergutInput.value = "";
        AblaufdatumInput.value = "";
        NotizenInput.value = "";
    }
}
*/