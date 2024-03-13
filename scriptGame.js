var listOfMaxProc = [];

const ALL_LETTERS = 26;
var WORD_LETTERS = 6;
var list = [];//=[WORD_LETTERS];

document.addEventListener('DOMContentLoaded', function () {
    //update();
}, false);

function update() {
    var textField = document.getElementById("pole");
    var textField2 = document.getElementById("pole2");
    let s = wordsLeft[0];
    textField.innerHTML = s;

    reduceList();

    list = getLetterPercentage(wordsLeft);

    let maxVal = 0;
    let maxIndex = 0;

    let outMax = getMaxPercentage(wordsLeft, list);
    maxVal = outMax.maxVal;
    maxIndex = outMax.maxIndex;
    listOfMaxProc = outMax.listOfMax;

    textField.innerHTML = "Word of " + wordsLeft[maxIndex] + " at index " + maxIndex + " has maximum value of percent " + maxVal.toFixed(2) + "%";
    textField2.innerHTML = "";//A_percentage;

    fillTable();
}

function getLetterPercentage(tableOfWords) {
    let listOut = [WORD_LETTERS];
    let string_len = WORD_LETTERS;

    for (let i = 0; i < WORD_LETTERS; i++) {
        listOut[i] = new Array(ALL_LETTERS);
        for (let j = 0; j < ALL_LETTERS; j++) {
            listOut[i][j] = 0;
        }
    }

    for (let i = 0; i < tableOfWords.length; i++) {
        string_len = WORD_LETTERS;
        if (string_len > tableOfWords[i].length)
            string_len = tableOfWords[i].length;
        for (let j = 0; j < string_len; j++) {
            //if(doubleLetter(tableOfWords, i)==false)
            listOut[j][tableOfWords[i].charCodeAt(j) - 'A'.charCodeAt(0)]++;
        }
    }
    return listOut;
}

function getMaxPercentage(tableOfWords, listOfLettersPercentage) {
    var listOfMaxProcInternal = [];
    let maxVal = 0;
    let maxIndex = 0;

    for (let i = 0; i < tableOfWords.length; i++) {
        listOfMaxProcInternal[i] = 0;
        for (let j = 0; j < WORD_LETTERS; j++) {
            listOfMaxProcInternal[i] += 100 * listOfLettersPercentage[j][tableOfWords[i].charCodeAt(j) - 'A'.charCodeAt(0)] / tableOfWords.length;
        }
        listOfMaxProcInternal[i] /= WORD_LETTERS;
        if ((maxVal < listOfMaxProcInternal[i]) && (doubleLetter(tableOfWords, i) == false)) {
            maxVal = listOfMaxProcInternal[i];
            maxIndex = i;
        }
    }
    return { maxVal: maxVal, maxIndex: maxIndex, listOfMax: listOfMaxProcInternal };
}

function doubleLetter(tableOfWords, index) {
    for (let i = 0; i < (WORD_LETTERS - 1); i++) {
        let s = tableOfWords[index];
        for (let j = i + 1; j < WORD_LETTERS; j++) {
            if (tableOfWords[index].charCodeAt(i) == tableOfWords[index].charCodeAt(j))
                return true;
        }
    }
    return false;
}

function hasLetters(tableOfWords, index, arrayOfLetters) {
    let isLetter = false;
    for (let i = 0; i < WORD_LETTERS; i++) {
        for (let j = 0; j < arrayOfLetters.length; j++) {
            if (tableOfWords[index][i] == arrayOfLetters[j])
                isLetter = true;
        }
        //if(isLetter==false) return false;
    }
    return isLetter;
}

function hasNoLetters(tableOfWords, index, arrayOfLetters) {
    for (let i = 0; i < WORD_LETTERS; i++) {
        for (let j = 0; j < arrayOfLetters.length; j++) {
            if (tableOfWords[index][i] == arrayOfLetters[j])
                return false;
        }
    }
    return true;
}

function hasLetterOnPos(tableOfWords, index, letter, pos) {
    if (pos >= WORD_LETTERS) return false;
    if (tableOfWords[index].charAt(pos) == letter)
        return true;
    return false;
}

function noLetterOnPos(tableOfWords, index, letter, pos) {
    if (pos >= WORD_LETTERS) return false;
    if (tableOfWords[index].charAt(pos) == letter)
        return false;
    return true;
}

function getArrayOfCharFromString(input) {
    let out = [];
    for (let i = 0; i < input.length; i++) {
        out[i] = input.charAt(i);
    }
    return out;
}

//////////////////////////////////////////////////////////////////
//Podejście2
var theWord = "";

let letterOnPosition = [];
let letterNotOnPosition = [];
let letterIn = "QWERTYUIOPASDFGHJKLZXCVBNM";
let letterOut = "";
let wordLeftMax = { word: "", numOfExcluded: 0 };
let wordsLeft;//=strList;


function calculateWordUsefulness(tableOfWords, word) {
    let wordLeft = 0;
    for (let i = 0; i < tableOfWords.length; i++) {
        if (hasNoLetters(tableOfWords, i, word)) {
            wordLeft++;
        }
    }
    if (wordLeftMax.numOfExcluded < wordLeft) {
        wordLeftMax.word = word;
        wordLeftMax.numOfExcluded = wordLeft;
    }
}

function wordLeftMaxCalculate(tableOfWords) {
    for (let i = 0; i < tableOfWords.length; i++) {
        if (doubleLetter(tableOfWords, i) != true)
            calculateWordUsefulness(tableOfWords, tableOfWords[i]);
    }
}

function calculateLetterUsefulness(tableOfWords, listOfPercentage) {
    let maxIndex = 0;
    let maxVal = 0;
    for (let i = 0; i < tableOfWords.length; i++) {
        let allpercentage = 0;
        for (let j = 0; j < WORD_LETTERS; j++) {
            allpercentage += listOfPercentage[j][tableOfWords[i].charCodeAt(j) - 'A'.charCodeAt(0)];
        }
        allpercentage /= tableOfWords.length * WORD_LETTERS;
        allpercentage *= 100;

        if ((maxVal < allpercentage) && (doubleLetter(tableOfWords, i) == false)) {
            maxVal = allpercentage;
            maxIndex = i;
        }
    }
    return { maxVal: maxVal, maxIndex: maxIndex };
}


function addLetterOnPosition(letter, position) {
    letterOnPosition.push({ pos: position, letter: letter });
}

function addLetterNotOnPosition(letter, position) {
    letterNotOnPosition.push({ pos: position, letter: letter });
}

function fillTable() {
    fillTable2();
    wordLeftMaxCalculate(wordsLeft);
    let textField2 = document.getElementById("pole2");

    let outPercentage = calculateLetterUsefulness(wordsLeft, list);
    textField2.innerHTML = "Wyraz: " + wordsLeft[outPercentage.maxIndex] + " daje " + outPercentage.maxVal.toFixed(2) + "% eliminacji";

    document.getElementById('litery').innerHTML = letterIn;

    var textField = document.getElementById("wordTable");
    let text = "<table>\
        <tr>\
            <th>Wyraz</th>\
            <th>Prawdopodobienstwo</th>\
            <th>Coś</th>\
        </tr>";
    let indexOut = 0;
    for (let i = 0; i < wordsLeft.length; i++) {
        text += "\
            <tr>\
                <td>"+ wordsLeft[i] + "</td>\
                <td>"+ listOfMaxProc[i] + "</td>\
                <td>Country</td>\
            </tr>";
    }

    text += "<table>";
    textField.innerHTML = text;
}

function reduceList() {
    let tempTable = [];
    let indexOut = 0;
    for (let i = 0; i < wordsLeft.length; i++) {
        if (
            true
            //&&hasLetters(wordsLeft, i, lettersIn)
            && hasNoLetters(wordsLeft, i, lettersOut)
            && checkIsLetterOnPos(wordsLeft, i)
            && checkIsNoletterOnPos(wordsLeft, i)
        ) {
            tempTable[indexOut] = wordsLeft[i];
            indexOut++;
        }
    }
    wordsLeft = [];
    wordsLeft = tempTable;
}

function checkIsNoletterOnPos(wordsLeft, index) {
    let ret = true;
    for (let i = 0; i < letterNotOnPlace.length; i++) {
        if (letterNotOnPlace[i] == undefined) continue;
        for (let j = 0; j < letterNotOnPlace[i].length; j++) {
            ret &&= noLetterOnPos(wordsLeft, index, letterNotOnPlace[i][j], i);
        }
    }
    return ret;
}

function checkIsLetterOnPos(wordsLeft, index) {
    let ret = true;
    for (let i = 0; i < letterOnPlace.length; i++) {
        if (letterOnPlace[i] != undefined)
            ret &&= hasLetterOnPos(wordsLeft, index, letterOnPlace[i], i);
    }
    return ret;
}











function fillTable2() {
    var textField = document.getElementById("letterPercentageTable");
    let text = "<table>\
        <tr>\
            <th>Litera</th>";
    for (let i = 0; i < WORD_LETTERS; i++) {
        text += "<th>Pozycja" + i + " %</th>";
    }
    text += "<th>All %</th>\
        </tr>";

    let indexOut = 0;
    let allLetterCnt = wordsLeft.length * WORD_LETTERS;
    let columnLetterCnt = wordsLeft.length;

    for (let i = 0; i < ALL_LETTERS; i++) {
        let allpercentage = 0;
        for (let j = 0; j < WORD_LETTERS; j++) {
            allpercentage += list[j][i];
        }
        allpercentage /= allLetterCnt;

        text += "\
        <tr>\
            <td>"+ (String.fromCharCode(i + 'A'.charCodeAt(0))) + "</td>";
        for (let j = 0; j < WORD_LETTERS; j++) {
            text += "<td>" + (100 * list[j][i] / columnLetterCnt).toFixed(2) + "%</td>";
        }
        text += "<td>" + (100 * allpercentage).toFixed(2) + "%</td>\
            </tr>";
    }

    text += "<table>";
    textField.innerHTML = text;
}

var wordList = [];
async function initData() {
    const urlParams = new URLSearchParams(window.location.search);
    const fileParam = urlParams.get('file');
    const letterCntParam = urlParams.get('letterCnt');

//    scriptTag = document.createElement("script");
//    scriptTag.type = "text/javascript";
    url = "";

    if (letterCntParam != null) {
        WORD_LETTERS = letterCntParam;
    } else {
        WORD_LETTERS = 5;
    }
    if (fileParam != null) {
        url = 'data/' + fileParam + '.txt';
    } else {
        url = 'data/words5common.txt';
    }
//    document.getElementsByTagName("head")[0].appendChild(scriptTag);

    list = [WORD_LETTERS];

    letterOnPosition = [];
    letterNotOnPosition = [];
    letterIn = "QWERTYUIOPASDFGHJKLZXCVBNM";
    letterOut = "";
    wordLeftMax = { word: "", numOfExcluded: 0 };


    await new Promise(function (resolve, reject) {
        var xmlhttp;
        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var text = xmlhttp.responseText;
                // Now convert it into array using regex
                text=text.replaceAll(/\s/g,',');
                text=text.replaceAll(',,',',');
                wordList = text.split(',');
                resolve();
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    });
    wordsLeft=wordList;

    reduceVisibleLetters();
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
