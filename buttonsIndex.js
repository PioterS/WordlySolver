const MIN_LETTER = 5;
const MAX_LETTER = 7;
var letterChooser = 5;
var wordsChooser = "common";
wordsChooser.re

function initKeys(){
    for(let i=MIN_LETTER;i<=MAX_LETTER;i++){
        document.getElementById(""+i + "letter").addEventListener('click', chooserPressed);
    }
    document.getElementById("common").addEventListener('click', e => {wordsChooser = 'common'; updateChooser();});
    document.getElementById("all").addEventListener('click', e => {wordsChooser = 'all'; updateChooser();});
    document.getElementById("submit").addEventListener('click', submitPressed);
    updateChooser();
}

const submitPressed = e => {
    url = window.location.href.replace("index.html","") + 'wordlyGame.html?file=words"+letterChooser+wordsChooser+'&letterCnt='+letterChooser;
    window.open(url,"_self");
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


