namespace client {

    //HTML:
    const table: HTMLElement = document.getElementById("GefriergutTabelle");

    interface Gefriergut {
        _id: string;
        index: number;
        Gefriergut: string;
        Ablaufdatum: string;
        Notiz: string;
        Anlegedatum: string;

    }

    let GefriergutListe: Gefriergut[] = [];





    //Server:

    const _url: string = "http://localhost:3000/";
    const webfunction: string = "GetGefriergut";
    const webfunction_delete: string = "deleteGefriergut";




    window.addEventListener("load", () => {
        getGefriergutFromServer();
    });


    async function getGefriergutFromServer(): Promise<void> {
        let response: Response = await fetch(_url + webfunction);
        let text: string = await response.text();
        GefriergutListe = JSON.parse(text);
        FülleGefriergutTabelle();
    }



    async function deleteGefriertgutfromServer(clickEvent: PointerEvent): Promise<void> {


        let parameter = "?id=" + clickEvent.target.id;

        console.log(parameter);
        let response: Response = await fetch(_url + webfunction_delete + parameter, {
            method: "GET",
        });

        let text: string = await response.text();
        console.log(text);

        window.location.reload();

    }


    function FülleGefriergutTabelle(): void {
        for (const GefriergutTemp of GefriergutListe) {
           
            let tableRow: HTMLElement = document.createElement("tr");
            let link: HTMLAnchorElement = document.createElement("a");
            link.href = "Detailansicht.html?id=" + GefriergutTemp._id

            let Gefriergut: HTMLElement = document.createElement("td");
            Gefriergut.textContent = GefriergutTemp.Gefriergut;

            let Ablaufdatum: HTMLElement = document.createElement("td");
            Ablaufdatum.textContent = GefriergutTemp.Ablaufdatum;

            let trashContainer: HTMLElement = document.createElement("td");
            let trash: HTMLElement = document.createElement("i");
            trash.className = "trash";
            let buttonid = GefriergutTemp._id
            trash.innerHTML = '<button id="' + buttonid + '" type="delete">-</button>'
            let deleteButton = trash.firstChild;

            deleteButton.addEventListener("click", deleteGefriertgutfromServer);

            link.append(Gefriergut)
            trashContainer.appendChild(trash);
            tableRow.append(link, Ablaufdatum, trashContainer)



            table.append(tableRow)
        }




        /* table.appendChild(tableRow);
         tableRow.appendChild(Gefriergut);
         tableRow.appendChild(Ablaufdatum);
         tableRow.appendChild(Notizen);
         tableRow.appendChild(trashContainer);
         trashContainer.appendChild(trash);
 
         trash.addEventListener("click", (): void => {
             table.removeChild(tableRow);
         }); */
    }

}