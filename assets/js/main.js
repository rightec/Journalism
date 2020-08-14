//Verifico il menu
let ul_item = document.getElementById("headBlockId");           //Trovo l'elemento che contiene il menù
let ul_item_buttons = ul_item.querySelectorAll('.menuButton');  //cerco i pulsanti della classe menuButton contenuti nel nodo menù
let buttonCnt =  ul_item_buttons.length;                        //Conto il numero di button trovati
let categoryCheck = false;                                      //Segnala che il numero di categorie è diverso da quello previsto
let gDate = new Date();                                         //Contiene la data
let videoCounts = aVideos.length;

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

