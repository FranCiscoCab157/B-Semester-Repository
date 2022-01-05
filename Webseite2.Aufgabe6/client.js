"use strict";
var dateInput = document.getElementById("dateInput");
var button = document.getElementById("send");
var answerArea = document.getElementById("answer");
var url = "http://127.0.0.1:3000";
var path = "/convertDate";

button.addEventListener("click", (evt) =>  {
    evt.preventDefault();
    sendFormAndShow();
});

async function communicate(url) {
    
    let response = await fetch(url);
    let date = await response.text();
    console.log(date);
    return date;
}

async function sendFormAndShow() {
    
   
    let inputValue = JSON.stringify(dateInput.value);
    let serverResponse = await communicate(url + path + `?date=${inputValue}`);
    let newDate = document.createElement("p");
    newDate.className = "serverResponse";
    newDate.textContent = serverResponse;
    answerArea.appendChild(newDate);
}

//# sourceMappingURL=client.js.map