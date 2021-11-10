"use strict";
// -- [Aufgabe 1]
/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age = 24;
/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName = `Max`;
function func1(age) {
    return 2021 - age;
}
let output = func2(firstName);
function func3(meal) {
    console.log(`Ich esse gerne ${meal || "Pizza"}.`);
    return func1(age) > 1995
        ? `Ich gehöre zur Generation Z`
        : `Ich gehöre zur Generation Y`;
}
console.log(output);
function func2(name) {
    console.log(`Ich heiße ${name}.`);
    return func3();
}
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * ...1. 23 
      2. Ich heiße Francisco.
      3. Ich gehöre zur Generation Z
      4. Ich esse gerne Pizza.
 */
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * ...
 */
// -- [Aufgabe 2]
let events = [
    ["Mark Knopfler", 10.1],
    ["Pink Floyd", 15.9],
    ["Metallica", 20.1],
    ["Michael Bublé", 11.1],
    ["Dire Straits", 12.2],
    ["Mariah Carey", 1.1],
    ["Cat Stevens", 12.99],
    ["Mark Forster", 2.1],
    ["Helene Fischer", 3.1],
    ["Bee Gees", 25.2],
];
// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN
// Lösung a) ...
console.log (events.length);
// Lösung b) ...
for (let i: number = 0;i < events.length; i++) {
    console.log(length [i][0]);
    console.log(length [i][1]);
}
// Lösung c) ...
function lösung(array: any[][]): number {
let result: number = 0;
for (let i: number = 1; i < array.length; i++) {
    let currentNumber: number = events [i][1];
    if (currentNumber > result)
    result = currentNumber;
}
return result;
}
console.log(lösung(events));
// Lösung d) ...
function lösung (name: string): boolean {
    for (let i: number = 0; i < events.length; i++) {

    if (name == events [i][0])
    return true;
    }
    return false;
}
console.log(lösung("Mariah Carey"));
// Lösung e) ...
funtion factorial(n: number): vold {
let result: number = 1;
while (n < 0) {
result *= n;
n--;
}
console.log(result);
} 
factorial(5);
// Lösung f) ...
function lösung(): void {
    for (let i: number = 1; i < 33; i++) {
        console.log(i*3);
    }
    console.log(33);
} 
lösung();
// Lösung g) ...
class ConcertEvent {
private interpret: String;
private price: number;

constructor(interpret: String, price: number) {
this.interpret = interpret;
this.price = price;

}
show(): void {
console.log(this.interpret);
console.log(this.price);


}



}
// Lösung h) ...
let concertArray: ConcertEvent[] = [
    new ConcertEvent("Mark Knopfler", 10.1),
    new ConcertEvent("Pink Floyd", 15.9),
    new ConcertEvent("Metallica", 20.1),
    new ConcertEvent("Michael Bublé", 11.1),
    new ConcertEvent("Dire Straits", 12.2),
    new ConcertEvent("Mariah Carey", 1.1),
    new ConcertEvent("Cat Stevens", 12.99),
    new ConcertEvent("Mark Forster", 2.1),
    new ConcertEvent("Helene Fischer", 3.1),
    new ConcertEvent("Bee Gees", 25.2)
];

for (let i: number = 0; i < concertArray.length; i++) {
    concertArray[i].show();
}
//# sourceMappingURL=script_vorlage.js.map