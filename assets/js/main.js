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
            maxData = compData(aDatas[i]);
            maxDataIndex = i;
            console.log("maxData: ", maxData);
        }//else
    }//end for
    console.log(aDatas[maxDataIndex]);
    aDatas[maxDataIndex]="00/00/0000"; //reset the max found
    console.log(aDatas);
    console.log(maxDataIndex);
    return maxDataIndex;
}

function addPlainArticle(index, element)
{
    console.log("addPlain article index", index);
    element.innerHTML+=`<section class="articleSession">
    <article class="articleMedia">
        <h2>${aTitles[index][cTitleIndex]}</h2>
        <img src=${aImages[index]} alt="Image" width="320" height="240">
        <p>${aArticles[index]}</p>
    </article>
</section>`;
}

function addVideoArticle(index, nodeToAdd){
    nodeToAdd.innerHTML+=`<aside class="asideMedia">
                    <h2>${aTitles[index][cTitleIndex]}</h2>
                    <iframe width="320" height="240"
                        src=${aVideos[index]}>
                    </iframe>       
                </aside>`;
}

function addImgArticle(index, element){
    element.innerHTML+=`<aside class="asideMedia">
    <h2>${aTitles[index][cTitleIndex]}</h2>
    <img src=${aImages[index]} alt="Image" width="320" height="240">      
</aside> `;               

}

function hideAllSession(){
    let sessionCollect = document.getElementsByClassName("articleSession");
        console.log("Sessioncollection");
        for (singleSess of sessionCollect){
            console.log(singleSess);
            singleSess.style.display = "none";
        }
}

function showAllSession() {
    let start = 0;
    let sessionCollect = document.getElementsByClassName("articleSession");
    console.log("Sessioncollection");
    function showSession() {
        if (start < sessionCollect.length) {
            console.log("Block n: ", start);
            sessionCollect[start].style.display= "block";
            start++;
        } else {
            clearAnimation();
            //console.log("Clearing interval");
        }
    }
    idInterval = setInterval(showSession, 3000);
    console.log ("End showAllSession");

/*for (singleSess of sessionCollect){
    console.log(singleSess);
    idInterval = setInterval(showSession, 3000, singleSess);
}*/
}

function clearAnimation(){
    //forcedHideButtonFlag = false;
    clearInterval(idInterval);
}
/*
function showSession(elem){
    elem.style.display = "block";
}
*/


function getCat(categIndex){

    function stepArticleOrder(){
        if (articleOrder < 3){
            articleOrder++;
        }else{
            articleOrder = 0;
        }
    }
    
    function resetArticleOrder(){
        articleOrder = -1;
    }

    function setTimeoutFlag(){
        timeoutFlag = true;
        console.log("setTimeoutFlag");
    }

    function resetTimeoutFlag(){
        timeoutFlag = false;
        console.log("resetTimeoutFlag");
    }


    //console.log("getCat");
    const cPlainArticle = 0; //Identify a plain article (same as 2)
    const cMediaVideoArticle = 1; //Identify a media Article with video
    const cMediaImgArticle = 3; //Identify a media Article with Image
    let articleOrder = -1;     //Last type of article built: Buid order is 0-1-2-3
    let tempArticle = -1;      //Index of the article to display
    let step_0_child = null;
    let step_session = null;
    let artSessChildNumb = 0;  //Store the number of session children
    let timeoutFlag = false;

    let aCateg = new Array();
    let aDate = new Array(); //Array per ordinare gli articoli

    let numbItemToShow = 0; //Numero di articoli da mostrare

    clearAnimation(); //In any case

    console.log("actualView is",actualView);

    if (currCategIndex != categIndex){
        currCategIndex = categIndex; //aggiorna la categoria corrente
        hideContButton(false); //riabilito il pulsante
        if (buttonPressedFlag == true){
            buttonPressedFlag = false; //reset del flag
        }
    }else{
        if (buttonPressedFlag == true){
            let hideBtn = document.getElementById("allNewsBlockId");
            hideBtn.style.visibility = "hidden";       
        }
    }
    

    console.log("Current categopry is", currCategIndex);

    if (categIndex < aCategories.length){
        //Filtro sulla categoria
        for (let i=0; i<aTitles.length;i++){
            if (aTitles[i][cCategIndex] == aCategories[categIndex]){
                aCateg.push(aTitles[i]);
                aCateg[aCateg.length-1].origIndex = i; //Salvo l'indice dell'array originale
            }        
        }

        if (actualView < aCateg.length){
            numbItemToShow = actualView;
        }else{
            numbItemToShow = aCateg.length;
            forceContButtonHide();
        }


        for (let i=0; i<numbItemToShow;i++){
            aDate.push(aCateg[i][cDateIndex]);
        }
    }else{
        //Tutti gli articoli
        for (let i=0; i<aTitles.length;i++){            
            aCateg.push(aTitles[i]);
            aCateg[aCateg.length-1].origIndex = i; //Salvo l'indice dell'array originale                   
        }

        if (actualView < aCateg.length){
            numbItemToShow = actualView;
        }else{
            numbItemToShow = aCateg.length;
            forceContButtonHide();
        }

        for (let i=0; i<numbItemToShow;i++){
            aDate.push(aCateg[i][cDateIndex]);
        }
    }//end if - default

    console.log(aCateg);
    console.log(aDate);
    //console.log("forcedHideButtonFlag is: ",forcedHideButtonFlag)
    

    //Cancella l'intera sessione
    artSessions.innerHTML="";

    //Per tutti gli elementi della categoria ordinati per data
    for (let i=0; i<numbItemToShow;i++){        
        //Select the more recent        
        tempArticle = getMoreRecent(aDate);           
        switch (articleOrder){  
            //State Machine         
            case -1:
                // execute for 0                                
                stepArticleOrder();
                addPlainArticle(aCateg[tempArticle].origIndex,artSessions); //Create the 1st child
                step_0_child = artSessions.children[artSessChildNumb];  //position on the 1st child
                step_session = artSessions.children[0];
                console.log("step_0_child",step_0_child);
                console.log("step_session",step_session);
                break;
            case 0:
                // execute for 1
                stepArticleOrder();
                addVideoArticle(aCateg[tempArticle].origIndex, step_0_child);
                console.log("step_0_child",step_0_child);
                console.log("step_session",step_session);
                break;
            case 1:
                // execute for 2
                stepArticleOrder();
                addPlainArticle(aCateg[tempArticle].origIndex,artSessions);
                artSessChildNumb++; //A new session has been added
                step_0_child = artSessions.children[artSessChildNumb];  //.nextElementSibling;  //position on the 1st child
                console.log("step_0_child",step_0_child);
                console.log("step_session",step_session); 
                break;            
            case 2:
                // execute for 3
                stepArticleOrder();
                addImgArticle(aCateg[tempArticle].origIndex, step_0_child);
                console.log("step_0_child",step_0_child);
                console.log("step_session",step_session);
                break;            
            case 3:
                // execute for 0
                stepArticleOrder();
                addPlainArticle(aCateg[tempArticle].origIndex,artSessions);
                artSessChildNumb++; //A new session has been added
                step_0_child = artSessions.children[artSessChildNumb];  
                console.log("step_0_child",step_0_child);
                console.log("step_session",step_session);
                break;            
            default:
                //error
                console.log("BLOCKING ERROR in switch case");
                break;
        }//end of switch
    }//end of for
    resetArticleOrder(); //Reset the state machine
    if ((getContButtonVisib() == "hidden") && 
        (buttonPressedFlag == true))  {
        hideAllSession();
        showAllSession();
        buttonPressedFlag = false;
    }
}//end of function

function hideContButton(hide){
    let hideBtn = document.getElementById("allNewsBlockId");
    if (hide == true){
        //hide continue button
        //hideBtn.style.visibility = "hidden";
        actualView = cMaxArticleShow;
        buttonPressedFlag = true;
        getCat(currCategIndex);
    }else{
        //show continue button
        hideBtn.style.visibility = "visible";
        actualView = defViews; //set the default
    }
}

function forceContButtonVisib(){
    let hideBtn = document.getElementById("allNewsBlockId");
    hideBtn.style.visibility = "visible"; 
}

function forceContButtonHide(){
    let hideBtn = document.getElementById("allNewsBlockId");
    hideBtn.style.visibility = "hidden"; 
}

function getContButtonVisib(){
    let hideBtn = document.getElementById("allNewsBlockId");
    return hideBtn.style.visibility; 
}

//Imposto le costanti
const cTitleIndex = 0;
const cCategIndex = 1;
const cDateIndex = 2;
const cMaxArticleShow = 1000;


//Imposto le variabili
let ul_item = document.getElementById("headBlockId");           //Trovo l'elemento che contiene il menù
let ul_item_buttons = ul_item.querySelectorAll('.menuButton');  //cerco i pulsanti della classe menuButton contenuti nel nodo menù
let buttonCnt =  ul_item_buttons.length;                        //Conto il numero di button trovati
let categoryCheck = false;                                      //Segnala che il numero di categorie è diverso da quello previsto
let gDate = new Date();                                         //Contiene la data
let videoCounts = aVideos.length;
let artSessions = document.getElementById("fullSessionId");
let allNewsButton = document.getElementById("allNewsBtnId");    //il button "continua"
let actualView = defViews;                                      //NUmber of article to show
let currCategIndex = -1;
let idInterval = -1;
let buttonPressedFlag = false;


if (buttonCnt == aCategories.length){
    //Il numero di pulsanti presente è uguale al numero di categorie ricevute dal back-end (simulato)
    //Cambio il valore del flag a true - IN FUTURO PUO'servire.
    categoryCheck = true;
}//end if

//Reset and rewrite - RISCRIVO IL MENU'
ul_item.innerHTML=""; 
for (let i=0; i<aCategories.length;i++){
    let catFunction = "getCat(" + i +")";
    console.log(aCategories[i]);
    ul_item.innerHTML+= `<li class="menu_item"> <button type="button" onclick=${catFunction} class="menuButton">${aCategories[i]} </button></li>`;
}

allNewsButton.outerHTML = `<button type="button" class="menuButton" id="allNewsBtnId" onclick="getCat(${aCategories.length})">Tutte le notizie</button>`;

//Assegna la data
document.getElementById("datetime").innerHTML = gDate.toLocaleDateString();

//Visualizza il default, ovvero gli articoli più recenti indipendentemente dal tipo
getCat(aCategories.length); //Using the array lenght as parameter index means "use the default"
