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

function getCat(categIndex){
    //console.log("getCat");
    const cPlainArticle = 0; //Identify a plain article (same as 2)
    const cMediaVideoArticle = 1; //Identify a media Article with video
    const cMediaImgArticle = 3; //Identify a media Article with Image
    let articleOrder = -1;     //Last type of article built: Buid order is 0-1-2-3
    let tempArticle = -1;      //Index of the article to display
    let step_0_child = null;
    let step_session = null;
    let artSessChildNumb = 0;  //Store the number of session children

    let aCateg = new Array();
    let aDate = new Array(); //Array per ordinare gli articoli

    if (categIndex < aCategories.length){
        //Filtro sulla categoria
        for (let i=0; i<aTitles.length;i++){
            if (aTitles[i][cCategIndex] == aCategories[categIndex]){
                aCateg.push(aTitles[i]);
                aCateg[aCateg.length-1].origIndex = i; //Salvo l'indice dell'array originale
            }        
        }

        for (let i=0; i<aCateg.length;i++){
            aDate.push(aCateg[i][cDateIndex]);
        }
    }else{
        //Tutti gli articoli
        for (let i=0; i<aTitles.length;i++){            
            aCateg.push(aTitles[i]);
            aCateg[aCateg.length-1].origIndex = i; //Salvo l'indice dell'array originale                   
        }
        for (let i=0; i<aCateg.length;i++){
            aDate.push(aCateg[i][cDateIndex]);
        }
    }//end if - default

    console.log(aCateg);
    console.log(aDate);
    

    //Cancella l'intera sessione
    artSessions.innerHTML="";

    //Per tutti gli elementi della categoria ordinati per data
    for (let i=0; i<aCateg.length;i++){
        //Select teh more recent
        tempArticle = getMoreRecent(aDate);
        switch (articleOrder){  
            //State Machine         
            case -1:
                // execute for 0
                articleOrder = 0;
                addPlainArticle(aCateg[tempArticle].origIndex,artSessions); //Create the 1st child
                step_0_child = artSessions.children[artSessChildNumb];  //position on the 1st child
                step_session = artSessions.children[0];
                console.log("step_0_child",step_0_child);
                console.log("step_session",step_session);
                break;
            case 0:
                // execute for 1
                articleOrder = 1;
                addVideoArticle(aCateg[tempArticle].origIndex, step_0_child);
                console.log("step_0_child",step_0_child);
                console.log("step_session",step_session);
                break;
            case 1:
                // execute for 2
                articleOrder = 2;
                addPlainArticle(aCateg[tempArticle].origIndex,artSessions);
                artSessChildNumb++; //A new session has been added
                step_0_child = artSessions.children[artSessChildNumb];  //.nextElementSibling;  //position on the 1st child
                console.log("step_0_child",step_0_child);
                console.log("step_session",step_session);                
                break;            
            case 2:
                // execute for 3
                articleOrder = 3;
                addImgArticle(aCateg[tempArticle].origIndex, step_0_child);
                console.log("step_0_child",step_0_child);
                console.log("step_session",step_session);                
                break;            
            case 3:
                // execute for 0
                articleOrder = 0;
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
    articleOrder = -1; //Reset the state machine
}//end of function



//Imposto le costanti
const cTitleIndex = 0;
const cCategIndex = 1;
const cDateIndex = 2;


//Imposto le variabili
let ul_item = document.getElementById("headBlockId");           //Trovo l'elemento che contiene il menù
let ul_item_buttons = ul_item.querySelectorAll('.menuButton');  //cerco i pulsanti della classe menuButton contenuti nel nodo menù
let buttonCnt =  ul_item_buttons.length;                        //Conto il numero di button trovati
let categoryCheck = false;                                      //Segnala che il numero di categorie è diverso da quello previsto
let gDate = new Date();                                         //Contiene la data
let videoCounts = aVideos.length;
let artSessions = document.getElementById("fullSessionId");
let allNewsButton = document.getElementById("allNewsBtnId");


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
