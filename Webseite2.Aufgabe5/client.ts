"use strict";
const date = document.getElementById("date");
const senden = document.getElementById("enter");
const answer = document.getElementById("answer");
const url = "http://127.0.0.1:3000";
const path = "/convertDate";

send.addEventListener("click", (evt) => 
{
    evt.preventDefault();
    DatetoServer();
});

async function requestDateWithGet(url) 
{
    let response = await fetch(url);
    let date = await response.text();
    return date;
}
async function DatetoServer() 
{
    let inputValue = JSON.stringify(datum.value);
    let serverAntwort = await requestDateWithGet(url + path + `?date=${inputValue}`);
    DatetoServer2(serverAntwort);
}
function DatetoServer2(serverResponse) {
    let newDate = document.createElement("p");
    newDate.className = "serverResponse";
    newDate.textContent = serverResponse;
    answerArea.appendChild(newDate);
}
