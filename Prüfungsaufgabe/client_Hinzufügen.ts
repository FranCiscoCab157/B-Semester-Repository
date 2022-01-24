namespace client {

    //HTML:
    let GefriergutInput: HTMLInputElement = null;
    let AblaufdatumInput: HTMLInputElement = null;
    let NotizenInput: HTMLInputElement = null;
    let KategorieInput: HTMLSelectElement = null;

    let submit: HTMLButtonElement = null;


    interface Gefriergut {
        index: number;
        Gefriergut: string;
        Ablaufdatum: string;
        Notiz: string;
        Anlegedatum: string;
        Kategorie: number;

    }

    //Server:

    const _url: string = "http://localhost:3000/";
    const webfunction: string = "addGefriergut";



    window.addEventListener("load", () => {
        GefriergutInput = <HTMLInputElement>(document.getElementById("Gefriergut"));
        AblaufdatumInput = <HTMLInputElement>(document.getElementById("Ablaufdatum"));
        NotizenInput = <HTMLInputElement>(document.getElementById("Notizen"));
        KategorieInput = <HTMLSelectElement>(document.getElementById("Kategorie"));

        submit = <HTMLButtonElement>(document.getElementById("submit"));
        submit.addEventListener("click", neuesGefriergut);
    });

    async function neuesGefriergut(event: Event): Promise<void> {

        event.preventDefault();

        let GefriergutAdd: Gefriergut = {
            index: 0,
            Gefriergut: "",
            Ablaufdatum: "",
            Notiz: "",
            Anlegedatum: "",
            Kategorie: 1
        };
        GefriergutAdd.Gefriergut = GefriergutInput.value
        GefriergutAdd.Ablaufdatum = AblaufdatumInput.value
        GefriergutAdd.Notiz = NotizenInput.value
        GefriergutAdd.Kategorie = (KategorieInput.selectedIndex) 

        sendJSONStringWithPost(_url + webfunction, JSON.stringify(GefriergutAdd));

    }

    async function sendJSONStringWithPost(url: RequestInfo, jsonString: string): Promise<void> {
        await fetch(url, {
            method: "POST",
            body: jsonString
        });
        console.log("event sent");
    }






}





