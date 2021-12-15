"use strict";
const datum = document.getElementById("datum");
const senden = document.getElementById("enter");
const antwort = document.getElementById("antwort");
const url = "http://127.0.0.1:3000";
const path = "/convertDate";

send.addEventListener("click", (evt) => 

{
    evt.preventDefault();
    datetoServer();
});
async function requestDateWithGet(url) {
    let response = await fetch(url);
    let date = await response.text();
    return date;
}
async function datetoServer() {
    let inputValue = JSON.stringify(datum.value);
    let serverAnswer = await requestDateWithGet(url + path + `?date=${inputValue}`);
    datetoServer2(serverAnswer);
}
function datetoServer2(serverResponse) {
    let newDate = document.createElement("p");
    newDate.className = "serverResponse";
    newDate.textContent = serverResponse;
    antwort.appendChild(newDate);
}