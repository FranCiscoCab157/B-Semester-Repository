namespace client {

    //HTML:
    const table: HTMLElement = document.getElementById("GefriergutTabelle");

    interface Gefriergut {
        index: number;
        Gefriergut: string;
        Ablaufdatum: string;
        Notiz: string;
        Anlegedatum: string;

    }

    var GefriergutListe: Gefriergut[] = [];





    //Server:

    const _url: string = "http://localhost:3000/";
    const webfunction: string = "GetGefriergut";



    window.addEventListener("load", () => {
        getGefriergutFromServer();
    });


    async function getGefriergutFromServer(): Promise<void> {
        let response: Response = await fetch(_url + webfunction);
        let text: string = await response.text();
        GefriergutListe = JSON.parse(text);
        console.log(GefriergutListe);
        FülleGefriergutTabelle();
    }





    function FülleGefriergutTabelle(): void {
        for (const GefriergutTemp of GefriergutListe) {
            console.log(GefriergutTemp)

            let tableRow: HTMLElement = document.createElement("tr");

            let Gefriergut: HTMLElement = document.createElement("td");
            Gefriergut.textContent = GefriergutTemp.Gefriergut;

            let Ablaufdatum: HTMLElement = document.createElement("td");
            Ablaufdatum.textContent = GefriergutTemp.Ablaufdatum;

            tableRow.append(Gefriergut, Ablaufdatum)



            table.append(tableRow)
        }
    }
}