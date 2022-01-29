namespace client {

    //HTML:
    let Gefriergut_Feld: HTMLElement = null
    let Ablaufdatum_Feld: HTMLElement = null
    let Notiz_Feld: HTMLElement= null
    let Anlegedatum_Feld: HTMLElement = null


    interface Gefriergut {
        index: number;
        Gefriergut: string;
        Ablaufdatum: string;
        Notiz: string;
        Anlegedatum: string;
        Kategorie: number;

    }




    let Gefriergut_Element: Gefriergut = null;






    //Server:

    const _url: string = "http://localhost:3000/";
    const webfunction: string = "GetGefriergut_Detail";



    window.addEventListener("load", () => {

        Gefriergut_Feld = <HTMLInputElement>(document.getElementById("Gefriergut_Feld"));
        Ablaufdatum_Feld = <HTMLInputElement>(document.getElementById("Ablaufdatum_Feld"));
        Notiz_Feld = <HTMLInputElement>(document.getElementById("Notiz_Feld"));
        Anlegedatum_Feld = <HTMLInputElement>(document.getElementById("Anlegedatum_Feld"));
        getGefriergutFromServer();
    });


    async function getGefriergutFromServer(): Promise<void> {
        let parameter = window.location.search;
        let response: Response = await fetch(_url + webfunction+ parameter);
        let text: string = await response.text();
        Gefriergut_Element = JSON.parse(text);
        console.log(Gefriergut_Element);
        FülleGefriergutFelder();
    }




    // Gefriergut Felder füllen

    function FülleGefriergutFelder(): void {
        

            Gefriergut_Feld.textContent = Gefriergut_Element.Gefriergut;

            Ablaufdatum_Feld.textContent = Gefriergut_Element.Ablaufdatum;
            
            Notiz_Feld.textContent = Gefriergut_Element.Notiz;
            
            Anlegedatum_Feld.textContent = Gefriergut_Element.Anlegedatum;

        
    }
}