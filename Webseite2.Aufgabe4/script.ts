namespace testNamespace {
    const inputInterpret = <HTMLInputElement> document.getElementById("input-interpret")
    const inputPrice = <HTMLInputElement>  document.getElementById("input-price")
    const display: HTMLElement= <HTMLElement>document.querySelector("#display");
    const myButton: HTMLButtonElement= <HTMLButtonElement>document.querySelector("#Event");

    myButton.addEventListener("click", mybuttonHandler);

    console.log(inputInterpret);
    console.log(inputPrice);

    let array: number[]= [12, 15, 17, 20];
    let arrayString: string= JSON.stringify(array);

    localStorage.setItem("localStorageElement", arrayString);

    function mybuttonHandler() {
        let interpretValue= inputInterpret.value;
        let priceValue= inputPrice.value;
        //console.log("button click");
        let arrayFromStorageAsString: string= localStorage.getItem("localStorageElement")
        let numbersArray: number[]; JSON.parse(arrayFromStorageAsString)
        console.log(numbersArray);
        console.log(numbersArray);

        console.log(numbersArray[0] * numbersArray[2]);

       // display.textContent= interpretValue + "; " +priceValue;
        let newElement= document.createElement("div");
        newElement.textContent= interpretValue + "; "+ priceValue;
        display.appendChild(newElement);

    }

}

function getElements() {
    inputElem = document.getElementsByTagName("input")
    [0];
    inputElem2 = document.getElementsByTagName("input")
    [1];
    dateInput = document.getElementById("dateInput");
    timeInput = document.getElementById("timeInput");
    button = document.getElementById("addBtn");
    selectElem = document.getElementById
    ("categoryFilter");
}

function addListeners()  {
button.addEventListener("click", addEntry, false);
selectElem.addEventListener("change"
filterEntries, false);
}

function addEntry(event) {
let inputValue = inputElem.value;
inputElem.value = ""; 

let inputValue2 = inputElem2.value;
inputElem2.value = "";

let dateValue = dateInput.value;
dateInput.value= "";

let timeValue = dateInput.value;
dateInput.value= "";

let obj = {
    id : _uuid(),
    todo: inputValue,
    category: inputValue2,
    date: dateValue,
    time: timeValue 
    done: false,

};

function rendowRow ({todo: inputValue, category:
inputValue2, id, done}){

    let table = document.getElementById("todoTable");

    let trElem = document.createElement("tr");
    table.appendChild(trElem);

rendowRow(obj);

todoList.push(obj);

save();

updateSelectOptions();

}

function localStorage(){


let concertEvent: ConcertEvent= {
    interpret: "Mark Knopfler",
    price: 10.1
 };

 console.log(concertEvent.interpret);
}

localStorage.setItem("interpret", JSON.stringify)



