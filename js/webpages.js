"use strict";
//Allmänna variabler och styles
let addButtonEl = document.getElementById("add");
let updateBtn = document.getElementById("update");

let message = document.getElementById("message");
let formHeading = document.getElementById("formheading");

updateBtn.style.display = "none";
addButtonEl.style.display ="block";


//variabler för arbetserfarenhet
let webptableEl = document.getElementById("webptable");
let webplistEl = document.getElementById("webplist");
let webpHeading = document.getElementById("webpagesheading");
let titleInput = document.getElementById("pagetitle");
let urlInput = document.getElementById("weburl");
let descInput = document.getElementById("description");



//Händelselyssnare
window.addEventListener("load", getAllwebpages);
addButtonEl.addEventListener("click", function(e){
    e.preventDefault();
    addWebpage();
});


//funktioner för utbildningar

//Hämtar alla kurser och skriver ut
function getAllwebpages(){
    webplistEl.innerHTML = "";
    webptableEl.innerHTML = "";

    fetch("https://dt173g_portfolio_restapi.afagerberg.se/webpages")
    .then(response => response.json())
    .then(data =>{
       data.forEach(webpage =>{
        webptableEl.innerHTML +=
        `<tr>
            <td>${webpage.title}</td>
            <td><a href="${webpage.pageurl}" target="_blank"> Klicka dig vidare</a></td>
            <td>${webpage.pagedescription}</td>
        </tr>
        <tr class="tablebtns">
        <td colspan="3"><button id="${webpage.id}" onclick="deleteWebpage('${webpage.id}')">Radera</button>
        <button class="edit" onclick="getWebpageById(${webpage.id}, '${webpage.title}', '${webpage.pageurl}', '${webpage.pagedescription}')">Redigera</button></td>
        </tr>`; 

           webplistEl.innerHTML +=
           `<ul class="listingwebpages">
                <li><strong>Titel webbplats: </strong> ${webpage.title}</li>
                <li><strong>Webblänk: </strong><a href="${webpage.pageurl}" target="_blank"> Klicka dig vidare </a></li>
                <li><strong>Beskrivning: </strong> ${webpage.pagedescription}</li>
                <li><button id="${webpage.id}" onclick="deleteWebpage('${webpage.id}')">Radera</button>
                <button class="edit" onclick="getWebpageById(${webpage.id}, '${webpage.title}', '${webpage.pageurl}', '${webpage.pagedescription}')">Redigera</button></li>
           </ul>`;
       }) 
    })
}

// Lägg till en kurs
function addWebpage() {
    let title = titleInput.value;
    let pageurl = urlInput.value;
    let desc = descInput.value;
    
    let pageObj = {'pageurl': pageurl, 'title': title, 'pagedescription': desc};
        
        fetch("https://dt173g_portfolio_restapi.afagerberg.se/webpages", {
            method: 'POST',
            body: JSON.stringify(pageObj),

        })
        .then(response => { 
            response.json()
            //kontrollerar response
            if(response.status === 400){
                message.style.color = "rgb(212, 25, 0)";
                message.style.marginTop = "10px";
                message.style.height = "auto";
                message.innerHTML = "Du måste fylla i alla fält korrekt! - En webbplatstitel, en länk, samt en liten beskrivning";
            }else{
                if(response.status === 201) {
                    message.style.color = "green";
                    message.style.marginTop = "10px";
                    message.style.height = "auto";
                    message.innerHTML = "En webbplats lades till!";
                }else {
                    message.style.color = "rgb(212, 25, 0)";
                    message.style.marginTop = "10px";
                    message.style.height = "auto";
                    message.innerHTML = "något gick fel...";
                }
            }
            
        })
        .then(data =>{
            getAllwebpages();

            titleInput.value = "";
            urlInput.value = "";
            descInput.value = "";

        })

        
        .catch(error => {
            console.log('Error', error);
        })
        
        
}

//Hämta specifik kurs, skriver ut i formuläret
function getWebpageById(id, title, pageurl, pagedescription) {


    formHeading.innerHTML = "Uppdatera webbsida";
    window.scrollTo(0, 0);

    message.innerHTML = "";
    
    updateBtn.style.display = "block";
    addButtonEl.style.display ="none";

    titleInput.value = title;
    urlInput.value = pageurl;
    descInput.value = pagedescription;


    // hämtar update vid klick
    updateBtn.addEventListener("click", function(e){

        e.preventDefault();
        updateWebpage(id);

    });

}

//Uppdaterar specifik kurs från inputfält i formuläret, skriver ut...
function updateWebpage(id) {
    
    //inputvariabler
    let title = titleInput.value;
    let pageurl = urlInput.value;
    let desc = descInput.value;
    
    let pageObj = {'pageurl': pageurl, 'title': title, 'pagedescription': desc};
    
    // kollar input och hämtar
    if(title == "" || pageurl == "" || desc == ""){
        message.style.color = "rgb(212, 25, 0)";
        message.style.marginTop = "10px";
        message.style.height = "auto";
        message.innerHTML = "Du måste fylla i alla fält korrekt för att uppdatera din webbsida!";
    }else{
        fetch("https://dt173g_portfolio_restapi.afagerberg.se/webpages?id=" + id,{
        method:'PUT',
        headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify(pageObj),

        })
        .then(response => {
            
                response.json()
                //kontrollerar response
                if(response.status === 200) {

                    message.style.color = "green";
                    message.innerHTML = "Din webbsida uppdaterades!";

                    window.setTimeout(function(){location.reload()},2000);

                }else {
                    message.style.color = "rgb(212, 25, 0)";
                    message.style.marginTop = "10px";
                    message.style.height = "auto";
                    message.innerHTML = "något gick fel...";
                    
                }
            
            

        })
        .then(data =>{

            getAllwebpages();

            updateBtn.style.display = "none";
            addButtonEl.style.display = "block";

        })


        .catch(error => {
            console.log('Error', error);
        })

        id="";
        titleInput.value = "";
        urlInput.value = "";
        descInput.value = "";

        formHeading.innerHTML = "Lägg till webbsidor som du har utvecklat";
    }


}

// Raderar specifik kurs
function deleteWebpage(id) {
    fetch("https://dt173g_portfolio_restapi.afagerberg.se/webpages?id=" + id, {
        method: 'DELETE',

    })
    .then(response =>{ 
        message.style.color = "green";
        message.style.marginTop = "10px";
        message.style.height = "auto";
        message.innerHTML = "Webbsidan är raderad!";
        response.json() })
    .then(data =>{
        getAllwebpages();
    })
    .catch(error => {
        console.log('Error', error);
    })
}