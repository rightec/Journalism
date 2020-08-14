function compData(dataToVal){
    /**Covert a data gg/mm/yyyy in absolute value */
    let year = dataToVal.substring(6, 10);
    //console.log("year is", year);
    let month = dataToVal.substring(3, 5);
    //console.log("month is", month);
    let day = dataToVal.substring(0, 2);
    //console.log("day is", day);
    let val = parseInt(year)*100 + parseInt(month)*10 + parseInt(day)*1;
    //console.log("Return val", val);
    return val;
}

function getMoreRecent(aDatas){
    /*Return the index of the aDatas array that contains
    all the articles dates **/
    let maxData = compData(aDatas[0]);
    let maxDataIndex = 0;
    for (let i=1; i<aDatas.length;i++){
        if (compData(aDatas[i]) > maxData){
            maxData = aDatas[i];
            maxDataIndex = i;
        }//else
    }//end for
    console.log(aDatas);
    aDatas[maxDataIndex]="00/00/0000"; //reset the max found
    console.log(aDatas);
    console.log(maxDataIndex);
    return maxDataIndex;
}


//Imposto le variabili
let ul_item = document.getElementById("headBlockId");           //Trovo l'elemento che contiene il menù
let ul_item_buttons = ul_item.querySelectorAll('.menuButton');  //cerco i pulsanti della classe menuButton contenuti nel nodo menù
let buttonCnt =  ul_item_buttons.length;                        //Conto il numero di button trovati
let categoryCheck = false;                                      //Segnala che il numero di categorie è diverso da quello previsto
let gDate = new Date();                                         //Contiene la data
let videoCounts = aVideos.length;
let firstPlainArticle = -1;
let secondtPlainArticle = -1;
let firstMediaArticle = -1;
let secondtMediaArticle = -1;
let aDate = new Array();
let artSessions = document.getElementById("fullSessionId");
let firstSession = artSessions.firstElementChild;
let firstArticle = firstSession.firstElementChild;

//console.log(firstSession);
console.log(firstArticle);

//getElementsByClassName("articleSession");

//console.log(artSessions);

for (let i=0; i<aTitles.length;i++){
    aDate.push(aTitles[i][2]);
}
//console.log(aTitles);

console.log(aDate);
//The most recent article is the first to be showed
firstPlainArticle = getMoreRecent(aDate);
firstArticle.innerHTML="";
firstArticle.innerHTML=`<h2>${aTitles[firstPlainArticle][0]}</h2>
<img src=${aImages[firstPlainArticle]} alt="Image" width="320" height="240">
<p>${aArticles[firstPlainArticle]}</p>`;


//TRAVERSING 

//console.log(ul_item_buttons);
//console.log("Numero di video", videoCounts);
//console.log("Numero di pulsanti: ", buttonCnt);

if (buttonCnt == aCategories.length){
    //Il numero di pulsanti presente è uguale al numero di categorie ricevute dal back-end (simulato)
    //Cambio il valore del flag a true - IN FUTURO PUO'servire.
    categoryCheck = true;
}//end if

//Reset and rewrite - RISCRIVO IL MENU'
ul_item.innerHTML=""; 
for (let i=0; i<aCategories.length;i++){
    console.log(aCategories[i]);
    ul_item.innerHTML+= `<li class="menu_item"> <button type="button" class="menuButton">${aCategories[i]} </button></li>`;
}

//Assegna la data
document.getElementById("datetime").innerHTML = gDate.toLocaleDateString();













let myElement=document.body.lastElementChild.previousElementSibling;
let idInterval=null;


function hideElem()
{
    // console.log(window["myButton"]); //Uso dell'oggetto window
    if (myElement.hidden == true){
        myElement.hidden = false;
    }else
    {
        myElement.hidden = true;
    }
}

idInterval = setInterval(hideElem,1000);


//clearInterval(idInterval); //Serve per terminare la setInterval

