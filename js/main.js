//Moment 5 DT173G av Alice Fagerberg

"use strict";
//variabler
let tableEl = document.getElementById("eduprinttable");
let listEl = document.getElementById("eduprintlist");
let formHeading = document.getElementById("formheading");
let coursesHeading = document.getElementById("coursesheading");

let addButtonEl = document.getElementById("add");
let updateBtn = document.getElementById("update");

let message = document.getElementById("message");

let codeInput = document.getElementById("courseid");
let nameInput = document.getElementById("cname");
let programInput = document.getElementById("program");
let eduplaceInput = document.getElementById("eduplace");
let startdateInput = document.getElementById("startdate");
let enddateInput = document.getElementById("enddate");

updateBtn.style.display = "none";
addButtonEl.style.display ="block";

//Händelselyssnare
window.addEventListener("load", getAllEducations);
addButtonEl.addEventListener("click", function(e){
    e.preventDefault();
    addEducation();
});


//funktioner

//Hämtar alla kurser och skriver ut
function getAllEducations(){
    listEl.innerHTML = "";
    tableEl.innerHTML = "";

    fetch("http://localhost/webb3projekt/completedstudies")
    .then(response => response.json())
    .then(data =>{
       data.forEach(education =>{
        tableEl.innerHTML +=
        `<tr>
            <td>${education.courseid}</td>
            <td>${education.cname}</td>
            <td>${education.program}</td>
            <td>${education.eduplace}</td>
            <td>${education.startdate}</td>
            <td>${education.enddate}</td>
        </tr>
        <tr class="tablebtns">
        <td colspan="6"><button id="${education.eduid}" onclick="deleteEducation('${education.eduid}')">Radera</button>
        <button class="edit" onclick="getEducationById('${education.eduid}', '${education.courseid}', '${education.cname}', '${education.program}', '${education.eduplace}', '${education.startdate}', '${education.enddate}')">Redigera</button></td>
        </tr>`; 

           listEl.innerHTML +=
           `<ul class="listingedu">
                <li><strong>Kurskod: </strong> ${education.courseid}</li>
                <li><strong>Kursnamn: </strong> ${education.cname}</li>
                <li><strong>Program: </strong> ${education.program}</li>
                <li><strong>Lärosäte: </strong> ${education.eduplace}</li>
                <li><strong>startdatum: </strong> ${education.startdate}</li>
                <li><strong>Slutdatum: </strong> ${education.enddate}</li>
                <li class="line"><button id="${education.eduid}" onclick="deleteEducation('${education.eduid}')">Radera</button>
                <button class="edit" onclick="getEducationById('${education.eduid}', '${education.courseid}', '${education.cname}', '${education.program}', '${education.eduplace}', '${education.startdate}', '${education.enddate}')">Redigera</button></li>
           </ul>`;
       }) 
    })
}

// Lägg till en kurs
function addEducation() {
    let courseid = codeInput.value;
    let cname = nameInput.value;
    let program = programInput.value;
    let eduplace = eduplaceInput.value;
    let startdate = startdateInput.value;
    let enddate = enddateInput.value;
    
    let courseObj = {'courseid': courseid, 'cname': cname, 'program': program, 'eduplace': eduplace, 'startdate': startdate, 'enddate': enddate};
        
        fetch("http://localhost/webb3projekt/completedstudies", {
            method: 'POST',
            body: JSON.stringify(courseObj),

        })
        .then(response => { 
            response.json()
            if(response.status === 400){
                message.style.color = "rgb(212, 25, 0)";
                message.innerHTML = "Du måste fylla i alla fält! - En kurskod, ett kursnamn, program, lärosäte samt start och sluttdatum på kursen";
            }else{
                if(response.status === 201) {
                    message.style.color = "green";
                    message.innerHTML = "En kurs lades till!";
                }else {
                    message.style.color = "rgb(212, 25, 0)";
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

//Hämta specifik kurs, skriver ut i formuläret
function getEducationById(id, courseid, cname, program, eduplace, startdate, enddate) {


    formHeading.innerHTML = "Uppdatera kurs";

    window.scrollTo(0, 0);

    message.innerHTML = "";
    
    updateBtn.style.display = "block";
    addButtonEl.style.display ="none";

    codeInput.value = courseid;
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

//Uppdaterar specifik kurs från inputfält i formuläret, skriver ut...
function updateEducation(id) {
    
    //inputvariabler
    let courseid = codeInput.value;
    let cname = nameInput.value;
    let program = programInput.value;
    let eduplace = eduplaceInput.value;
    let startdate = startdateInput.value;
    let enddate = enddateInput.value;
    
    let courseObj = {'courseid': courseid, 'cname': cname, 'program': program, 'eduplace': eduplace, 'startdate': startdate, 'enddate': enddate};
    
    // kollar input och hämtar
    if(response.status === 400){
        message.style.color = "rgb(212, 25, 0)";
        message.innerHTML = "Du måste fylla i alla fält för att uppdatera kursen!";
    }else{
        fetch("http://localhost/webb3projekt/completedstudies?eduid=" + id,{
        method:'PUT',
        headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify(courseObj),

        })
        .then(response => {
            

                response.json()
                if(response.status === 200) {

                    message.style.color = "green";
                    message.innerHTML = "Kursen uppdaterades!";

                    id="";
                    codeInput.value = "";
                    nameInput.value = "";
                    programInput.value = "";
                    eduplaceInput.value = "";
                    startdateInput.value = "";
                    enddateInput.value = "";

                }else {
                    message.innerHTML = "något gick fel...";
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

        formHeading.innerHTML = "Lägg till kurs";
    }


}

// Raderar specifik kurs
function deleteCourse(id) {
    fetch("http://localhost/webb3projekt/completedstudies?eduid=" + id, {
        method: 'DELETE',

    })
    .then(response =>{ 
        message.style.color = "green";
        message.innerHTML = "Kursen är raderad!";
        response.json() })
    .then(data =>{
        getCourses();
    })
    .catch(error => {
        console.log('Error', error);
    })
}