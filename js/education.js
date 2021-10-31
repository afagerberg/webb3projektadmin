//Projekt DT173G av Alice Fagerberg

"use strict";
//Allmänna variabler och styles
let addButtonEl = document.getElementById("add");
let updateBtn = document.getElementById("update");

let message = document.getElementById("message");

let formHeading = document.getElementById("formheading");

updateBtn.style.display = "none";
addButtonEl.style.display ="block";

//Variabler för utbildningar
let edutableEl = document.getElementById("eduprinttable");
let edulistEl = document.getElementById("eduprintlist");
let coursesHeading = document.getElementById("educationheading");

let codeInput = document.getElementById("coursecode");
let nameInput = document.getElementById("cname");
let programInput = document.getElementById("program");
let eduplaceInput = document.getElementById("eduplace");
let startdateInput = document.getElementById("startdate");
let enddateInput = document.getElementById("enddate");


//Händelselyssnare
window.addEventListener("load", getAllEducations);
addButtonEl.addEventListener("click", function(e){
    e.preventDefault();
    addEducation();
});


//funktioner för utbildningar

//Hämtar alla utbildningar och skriver ut
function getAllEducations(){
    edulistEl.innerHTML = "";
    edutableEl.innerHTML = "";

    fetch("https://dt173g_portfolio_restapi.afagerberg.se/completedstudies")
    .then(response => response.json())
    .then(data =>{
       data.forEach(education =>{
        edutableEl.innerHTML += //skriver ut tabell med datan
        `<tr>
            <td>${education.coursecode}</td>
            <td>${education.cname}</td>
            <td>${education.program}</td>
            <td>${education.eduplace}</td>
            <td>${education.startdate}</td>
            <td>${education.enddate}</td>
        </tr>
        <tr class="tablebtns">
        <td colspan="6"><button id="${education.eduid}" onclick="deleteEducation(${education.eduid})">Radera</button>
        <button class="edit" onclick="getEducation(${education.eduid}, '${education.coursecode}', '${education.cname}', '${education.program}', '${education.eduplace}', '${education.startdate}', '${education.enddate}')">
        Redigera</button></td>
        </tr>`; 

        edulistEl.innerHTML += //skriver ut lista med data (för mobil)
        `<ul class="listingedu">
            <li><strong>Kurskod: </strong> ${education.coursecode}</li>
            <li><strong>Kursnamn: </strong> ${education.cname}</li>
            <li><strong>Program: </strong> ${education.program}</li>
            <li><strong>Lärosäte: </strong> ${education.eduplace}</li>
            <li><strong>startdatum: </strong> ${education.startdate}</li>
            <li><strong>Slutdatum: </strong> ${education.enddate}</li>
            <li><button id="${education.eduid}" onclick="deleteEducation(${education.eduid})">Radera</button>
            <button class="edit" onclick="getEducation(${education.eduid}, '${education.coursecode}', '${education.cname}', '${education.program}', '${education.eduplace}', '${education.startdate}', '${education.enddate}')">
            Redigera</button></li>
        </ul>`;
       }) 
    })
}

// Lägg till en kurs
function addEducation() {
    let coursecode = codeInput.value;
    let cname = nameInput.value;
    let program = programInput.value;
    let eduplace = eduplaceInput.value;
    let startdate = startdateInput.value;
    let enddate = enddateInput.value;
    
    let courseObj = {'coursecode': coursecode, 'cname': cname, 'program': program, 'eduplace': eduplace, 'startdate': startdate, 'enddate': enddate};
        
        fetch("https://dt173g_portfolio_restapi.afagerberg.se/completedstudies", {
            method: 'POST',
            body: JSON.stringify(courseObj),

        })
        .then(response => { 
            response.json()
            //kontrollerar response
            if(response.status === 400){
                message.style.color = "rgb(212, 25, 0)";
                message.style.marginTop = "10px";
                message.style.height = "auto";
                message.innerHTML = "Du måste fylla i alla fält korrekt! - En kurskod, ett kursnamn, program, lärosäte samt start och sluttdatum på kursen";
            }else{
                if(response.status === 201) {
                    message.style.color = "green";
                    message.style.marginTop = "10px";
                    message.style.height = "auto";
                    message.innerHTML = "En utbildning lades till!";
                }else {
                    message.style.color = "rgb(212, 25, 0)";
                    message.style.marginTop = "10px";
                    message.style.height = "auto";
                    message.innerHTML = "något gick fel...";
                }
            }
            
        })
        .then(data =>{
            getAllEducations();

            codeInput.value = "";
            nameInput.value = "";
            programInput.value = "";
            eduplaceInput.value = "";
            startdateInput.value = "";
            enddateInput.value = "";

        })

        
        .catch(error => {
            console.log('Error', error);
        })
        
        
}

//Hämta specifik utbildning, skriver ut i formuläret
function getEducation(id, coursecode, cname, program, eduplace, startdate, enddate) {

    formHeading.innerHTML = "Uppdatera utbildning";

    window.scrollTo(0, 0);

    message.innerHTML = "";
    
    updateBtn.style.display = "block";
    addButtonEl.style.display ="none";

    codeInput.value = coursecode;
    nameInput.value = cname;
    programInput.value = program;
    eduplaceInput.value = eduplace;
    startdateInput.value = startdate;
    enddateInput.value = enddate;

    // hämtar update vid klick
    updateBtn.addEventListener("click", function(e){

        e.preventDefault();
        updateEducation(id);

    });

}

//Uppdaterar specifik utbildning från inputfält i formuläret, skriver ut...
function updateEducation(id) {
    
    //inputvariabler
    let coursecode = codeInput.value;
    let cname = nameInput.value;
    let program = programInput.value;
    let eduplace = eduplaceInput.value;
    let startdate = startdateInput.value;
    let enddate = enddateInput.value;
    
    let courseObj = {'coursecode': coursecode, 'cname': cname, 'program': program, 'eduplace': eduplace, 'startdate': startdate, 'enddate': enddate};
    
    // kollar input och hämtar
    if(coursecode == "" || cname == "" || program == "" || eduplace == "" || startdate == "" || enddate == ""){
        message.style.color = "rgb(212, 25, 0)";
        message.style.marginTop = "10px";
        message.style.height = "auto";
        message.innerHTML = "Du måste fylla i alla fält korrekt för att uppdatera utbildningen!";
    }else{
        fetch("https://dt173g_portfolio_restapi.afagerberg.se/completedstudies?eduid=" + id,{
        method:'PUT',
        headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify(courseObj),

        })
        .then(response => {
            

                response.json()
                //kontrollerar response
                if(response.status === 200) {

                    message.style.color = "green";
                    message.style.marginTop = "10px";
                    message.style.height = "auto";
                    message.innerHTML = "utbildningen uppdaterades!";

                    window.setTimeout(function(){location.reload()},2000);

                }else {
                    message.innerHTML = "något gick fel...";
                    message.style.marginTop = "10px";
                    message.style.height = "auto";
                    message.style.color = "rgb(212, 25, 0)";
                }
            
            

        })
        .then(data =>{

            getAllEducations();

            updateBtn.style.display = "none";
            addButtonEl.style.display = "block";

        })


        .catch(error => {
            console.log('Error', error);
        })

        id="";
        codeInput.value = "";
        nameInput.value = "";
        programInput.value = "";
        eduplaceInput.value = "";
        startdateInput.value = "";
        enddateInput.value = "";

        formHeading.innerHTML = "Lägg till Utbildning";
    }


}

// Raderar specifik utbildning
function deleteEducation(id) {
    fetch("https://dt173g_portfolio_restapi.afagerberg.se/completedstudies?eduid=" + id, {
        method: 'DELETE',

    })
    .then(response =>{ 
        message.style.color = "green";
        message.style.marginTop = "10px";
        message.style.height = "auto";
        message.innerHTML = "Utbildningen är raderad!";
        response.json() })
    .then(data =>{
        getAllEducations();
    })
    .catch(error => {
        console.log('Error', error);
    })
}