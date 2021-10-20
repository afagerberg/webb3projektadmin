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

    fetch("http://localhost/webb3projekt/webpages")
    .then(response => response.json())
    .then(data =>{
       data.forEach(webpage =>{
        webptableEl.innerHTML +=
        `<tr>
            <td>${webpage.title}</td>
            <td>${webpage.pageurl}</td>
            <td>${webpage.pagedescription}</td>
        </tr>
        <tr class="tablebtns">
        <td colspan="3"><button id="${webpage.id}" onclick="deleteWebpage('${webpage.id}')">Radera</button>
        <button class="edit" onclick="getWebpageById(${webpage.id}, '${webpage.title}', '${webpage.pageurl}', '${webpage.pagedescription}')">Redigera</button></td>
        </tr>`; 

           webplistEl.innerHTML +=
           `<ul class="listingwebpages">
                <li><strong>Kursnamn: </strong> ${webpage.title}</li>
                <li><strong>startdatum: </strong> ${webpage.pageurl}</li>
                <li><strong>Slutdatum: </strong> ${webpage.pagedescription}</li>
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
        
        fetch("http://localhost/webb3projekt/webpages", {
            method: 'POST',
            body: JSON.stringify(pageObj),

        })
        .then(response => { 
            response.json()
            if(response.status === 400){
                message.style.color = "rgb(212, 25, 0)";
                message.innerHTML = "Du måste fylla i alla fält! - En webbplatstitel, en länk, samt en liten beskrivning";
            }else{
                if(response.status === 201) {
                    message.style.color = "green";
                    message.innerHTML = "En webbplats lades till!";
                }else {
                    message.style.color = "rgb(212, 25, 0)";
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


    formHeading.innerHTML = "Uppdatera webbplats";
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
        message.innerHTML = "Du måste fylla i alla fält för att uppdatera din webbplats!";
    }else{
        fetch("http://localhost/webb3projekt/webpages?id=" + id,{
        method:'PUT',
        headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify(pageObj),

        })
        .then(response => {
            
                response.json()
                if(response.status === 200) {

                    message.style.color = "green";
                    message.innerHTML = "Din webbplats uppdaterades!";

                    window.setTimeout(function(){location.reload()},2000);

                }else {
                    message.innerHTML = "något gick fel...";
                    message.style.color = "rgb(212, 25, 0)";
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

        formHeading.innerHTML = "Lägg till webbplatser som du har utvecklat";
    }


}

// Raderar specifik kurs
function deleteWebpage(id) {
    fetch("http://localhost/webb3projekt/webpages?id=" + id, {
        method: 'DELETE',

    })
    .then(response =>{ 
        message.style.color = "green";
        message.innerHTML = "Webbplatsen är raderad!";
        response.json() })
    .then(data =>{
        getAllwebpages();
    })
    .catch(error => {
        console.log('Error', error);
    })
}