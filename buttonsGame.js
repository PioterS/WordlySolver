let lettersIn="QWERTYUIOPASDFGHJKLZXCVBNM";
let lettersOut="";

let letterOnPlace=[];
let letterNotOnPlace=[];

var letterChooser = 5;
var wordsChooser = "common";
const MIN_LETTER = 5;
const MAX_LETTER = 7;

let scriptTag;

function insertKeys(){
    let keysArea = document.getElementById("alfabet");

    keysArea.innerHTML = "  <div class=keys id=keyQ>Q</div>\
                            <div class=keys id=keyW>W</div>\
                            <div class=keys id=keyE>E</div>\
                            <div class=keys id=keyR>R</div>\
                            <div class=keys id=keyT>T</div>\
                            <div class=keys id=keyY>Y</div>\
                            <div class=keys id=keyU>U</div>\
                            <div class=keys id=keyI>I</div>\
                            <div class=keys id=keyO>O</div>\
                            <div class=keys id=keyP>P</div>\
                            <div class=break id=break></div>\
                            <div class=keys id=keyA>A</div>\
                            <div class=keys id=keyS>S</div>\
                            <div class=keys id=keyD>D</div>\
                            <div class=keys id=keyF>F</div>\
                            <div class=keys id=keyG>G</div>\
                            <div class=keys id=keyH>H</div>\
                            <div class=keys id=keyJ>J</div>\
                            <div class=keys id=keyK>K</div>\
                            <div class=keys id=keyL>L</div>\
                            <div class=break id=break></div>\
                            <div class=keys id=keyZ>Z</div>\
                            <div class=keys id=keyX>X</div>\
                            <div class=keys id=keyC>C</div>\
                            <div class=keys id=keyV>V</div>\
                            <div class=keys id=keyB>B</div>\
                            <div class=keys id=keyN>N</div>\
                            <div class=keys id=keyM>M</div>\
                            <div class=break id=break></div>\
                            ";

    initLetterKeys();

    let wordArea = document.getElementById("wyraz");

    wordArea.innerHTML="<div style='width: 200px'>Zawiera litery na tym miejscu:</div>";
    for(let i=0;i<MAX_LETTER;i++){
        wordArea.innerHTML += '<input class=letters id="letter'+i+'" type="text" name="fname" onkeyup="validate(this);">';
    }
    wordArea.innerHTML += '<div class=break id=break></div>';

    wordArea.innerHTML += "<div style='width: 200px'>Zawiera litery nie na tym miejscu:</div>";
    for(let i=0;i<MAX_LETTER;i++){
        wordArea.innerHTML += '<input class=letters id="noLetter'+i+'" type="text" name="fname" onkeyup="validate2(this);">';
    }

    fillLetters();
}

function validate(input){
    input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();

    let letterNum=(""+input.id).replace("letter","");
    letterOnPlace[letterNum] = ""+input.value;
}

function validate2(input){
    input.value = input.value.replace(/\W|\d/g, '').substr(0, MAX_LETTER-1).toUpperCase();

    let letterNum=(""+input.id).replace("noLetter","");
    letterNotOnPlace[letterNum] = ""+input.value;
}

function initLetterKeys(){
    let listOfKeys = document.getElementsByClassName('keys');
    for(let i=0;i<listOfKeys.length;i++){
        listOfKeys[i].addEventListener('click', keyPressed);
    }
}

const keyPressed = e => {
    let idName = "";
    idName = e.target.id;

    idName=idName.replace("key", "");
    
    if(lettersIn.search(idName)!=-1){
        lettersIn=lettersIn.replace(idName, "");
        lettersOut+=idName;
    }else{
        if(lettersOut.search(idName)!=-1){
            lettersOut=lettersOut.replace(idName, "");
            lettersIn+=idName;
        }
    }
    fillLetters();
}

function fillLetters(){
    for(let i=0;i<lettersIn.length;i++){
        document.getElementById("key"+lettersIn[i]).style.background = 'lightgreen';
    }
    for(let i=0;i<lettersOut.length;i++){
        document.getElementById("key"+lettersOut[i]).style.background = 'red';
    }
    lettersIn=lettersIn.split('').sort().join('');
    lettersOut=lettersOut.split('').sort().join('');
    document.getElementById("lettersIn").innerHTML = lettersIn;
    document.getElementById("lettersOut").innerHTML = lettersOut;

    //document.getElementById("wordTable").innerHTML = letterNotOnPlace[1];
}








function initKeys(){
    for(let i=MIN_LETTER;i<=MAX_LETTER;i++){
        document.getElementById(""+i + "letter").addEventListener('click', chooserPressed);
    }
    document.getElementById("common").addEventListener('click', e => {wordsChooser = 'common'; updateChooser();});
    document.getElementById("all").addEventListener('click', e => {wordsChooser = 'all'; updateChooser();});
    document.getElementById("submit").addEventListener('click', submitPressed);
    updateChooser();
    insertKeys();
    reduceVisibleLetters();
}

const submitPressed = e => {
    WORD_LETTERS = letterChooser;
    reduceVisibleLetters();
    loadScript();
}

function updateChooser(){
    for(let i=MIN_LETTER;i<=MAX_LETTER;i++){
        if(i==letterChooser){
            document.getElementById(""+i + "letter").style.background = 'red';
        }else{
            document.getElementById(""+i + "letter").style.background = 'green';
        }
    }

    if(wordsChooser==='common'){
        document.getElementById("common").style.background = 'red';
        document.getElementById("all").style.background = 'green';
    }
    if(wordsChooser==='all'){
        document.getElementById("common").style.background = 'green';
        document.getElementById("all").style.background = 'red';
    }
}

const chooserPressed = e => {
    let key = "";
    key = e.target.id;
    key = key.replace('letter', '');
    letterChooser = key;
    
    updateChooser();
}

function reduceVisibleLetters(){
    for(let i=0;i<MAX_LETTER;i++){
        if(i<WORD_LETTERS){
            document.getElementById('letter'+i).style.visibility = "visible";
            document.getElementById('noLetter'+i).style.visibility = "visible";
        }else{
            document.getElementById('letter'+i).style.visibility = "hidden";
            document.getElementById('noLetter'+i).style.visibility = "hidden";
        }
    }
}

