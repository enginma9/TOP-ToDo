import './style/style.css';
import Enginma from './scripts/enginma.js';

/*
function storageAvail(type){
    let storage;
    try{
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
        e instanceof DOMException &&
        // everything except Firefox
        (//e.code === 22 ||
            // Firefox
            //e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
        );

    }
}

if( storageAvail( "localStorage" ) ){
    console.log("localStorage available");
}else{
    console.log("localStorage NOT available");
}
*/
/*
function setStorage( key, value ){
    window[ "localStorage" ].setItem( key, value );
}

window[ "localStorage" ].setItem( "text", "butts" );
window[ "localStorage" ].setItem( "text2", "more butts" );
setStorage( "text3", "even more butts" );

const items = {...localStorage};

let count = 0;
function getBtn(){
    let x = Object.keys( localStorage );
    let y = x.length;
    let z = Number(count % y);
    console.log( "y:", y, " count % y:", String( z ) );
    console.log( "x:", x, "y:", y, "z:", z, "x[z]:", x[z] );
    console.log( window["localStorage"].getItem( x[( z )] ) );
    let r = window["localStorage"].getItem( x[( z )] );
    count++;
    return r;
}
const button = document.createElement("div");
button.appendChild( document.createTextNode( "Local:" ) );
document.body.appendChild( button );
button.addEventListener("click", function(){
    button.appendChild( document.createTextNode( getBtn() ) );
});

let names = [ "1", "2", "3", (1/3) ];

localStorage.names = JSON.stringify(names);
console.log( "localStorage.names:", localStorage.names );
var storedNames = JSON.parse(localStorage.names);
console.log( storedNames );

let r = {
    x : 5,
    r : "tom",
    a : "beefy"
};

localStorage.setItem( "text5", JSON.stringify( r ) );
*/
/*
const fillButton = document.createElement('div');
fillButton.appendChild( document.createTextNode( "Fill" ) );

const clearButton = document.createElement('div');
clearButton.appendChild( document.createTextNode( "Clear" ) );
*/


const firstLine = Enginma.createObject({ classes:["row"] });
const title = Enginma.createObject({ insertText:true, text:"ToDone", classes:[ "half-width", "left" ] });
const timeDiv = Enginma.createObject({ classes:[ "half-width", "right" ] });
Enginma.appendChildren({ parent:firstLine, children:[ title, timeDiv] });
document.body.appendChild( firstLine );
function showtime(){
    let timeString = "";
    let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let now = new Date();
    timeString += "Today is: " + days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + String( now.getHours() ).padStart( 2, "0" ) +":" + String( now.getMinutes() ).padStart( 2, "0" ) + ":" + String( now.getSeconds() ).padStart( 2, "0" );
    timeDiv.innerText = timeString;
}
showtime();
setInterval( showtime, 1000 );
const input1 = Enginma.createObject({ type:'input' });
const input1go = Enginma.createObject({ type:'button', insertText:true, text:"->" });

const frame = document.createElement('div');
frame.appendChild( input1 );
frame.appendChild( input1go );
const output = document.createElement('span');
output.appendChild( document.createTextNode( "Output" ) );
frame.appendChild( output );
document.body.appendChild( frame );

input1go.addEventListener( "click", function(){
    let storeInput = input1.value;
    localStorage.storeInput = JSON.stringify( storeInput );
    output.innerText = JSON.parse( localStorage.storeInput );
    //output.innerText += localStorage.storeInput;
} );

const taskTitle = Enginma.createObject({ classes:["note-title"], insertText: true, text:"Tasks:" });

const noteTitle = Enginma.createObject({ classes:["note-title"], insertText:true, text:"Notes:" });
const noteContainer = Enginma.createObject({ classes:["note-container"], });
let note = [];
for(let i = 0; i < 9; i++ ){
    note[i] = Enginma.createObject({ classes:["white-note"],insertText: true, text:"testing testing testing testing testing" });
    noteContainer.appendChild( note[i] );
}
document.body.appendChild( noteTitle );
document.body.appendChild( noteContainer );

for( let i = 0; i < 20; i++ ){
    note[5].appendChild( document.createElement('br') );
    note[5].appendChild( document.createTextNode('br') );
}
noteTitle.addEventListener( "click", function(){
    note[0].classList.add("deleting");
    setTimeout( function(){
        note[0].classList.add("hide-me")
    }, 500 );
})