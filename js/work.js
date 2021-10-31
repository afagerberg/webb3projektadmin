"use strict";
//Allmänna variabler och styles
let addButtonEl = document.getElementById("add");
let updateBtn = document.getElementById("update");

let message = document.getElementById("message");
let formHeading = document.getElementById("formheading");

updateBtn.style.display = "none";
addButtonEl.style.display ="block";


//variabler för arbetserfarenhet
let worktableEl = document.getElementById("worktable");
let worklistEl = document.getElementById("worklist");
let workHeading = document.getElementById("workheading");
let titleInput = document.getElementById("worktitle");
let workplaceInput = document.getElementById("workplace");
let startdateInput = document.getElementById("startdate");
let enddateInput = document.getElementById("enddate");




//Händelselyssnare
window.addEventListener("load", getAllJobs);
addButtonEl.addEventListener("click", function(e){
    e.preventDefault();
    addJob();
});


//funktioner för utbildningar

//Hämtar alla kurser och skriver ut
function getAllJobs(){
    worklistEl.innerHTML = "";
    worktableEl.innerHTML = "";

    fetch("https://dt173g_portfolio_restapi.afagerberg.se/workexperience")
    .then(response => response.json())
    .then(data =>{
       data.forEach(job =>{
        worktableEl.innerHTML +=
        `<tr>
            <td>${job.title}</td>
            <td>${job.workplace}</td>
            <td>${job.startdate}</td>
            <td>${job.enddate}</td>
        </tr>
        <tr class="tablebtns">
        <td colspan="4"><button id="${job.jobid}" onclick="deleteJob('${job.jobid}')">Radera</button>
        <button class="edit" onclick="getJobById('${job.jobid}', '${job.title}', '${job.workplace}', '${job.startdate}', '${job.enddate}')">Redigera</button></td>
        </tr>`; 

           worklistEl.innerHTML +=
           `<ul class="listingwork">
                <li><strong>Kursnamn: </strong> ${job.title}</li>
                <li><strong>startdatum: </strong> ${job.workplace}</li>
                <li><strong>Slutdatum: </strong> ${job.startdate}</li>
                <li><strong>Slutdatum: </strong> ${job.enddate}</li>
                <li><button id="${job.jobid}" onclick="deleteJob('${job.jobid}')">Radera</button>
                <button class="edit" onclick="getJobById('${job.jobid}', '${job.title}', '${job.workplace}', '${job.startdate}', '${job.enddate}')">Redigera</button></li>
           </ul>`;
       }) 
    })
}

// Lägg till en kurs
function addJob() {
    let title = titleInput.value;
    let workplace = workplaceInput.value;
    let startdate = startdateInput.value;
    let enddate = enddateInput.value;
    
    let workObj = {'title': title, 'workplace': workplace, 'startdate': startdate, 'enddate': enddate};
        
        fetch("https://dt173g_portfolio_restapi.afagerberg.se/workexperience", {
            method: 'POST',
            body: JSON.stringify(workObj),

        })
        .then(response => { 
            response.json()
            //kontrollerar response
            if(response.status === 400){
                message.style.color = "rgb(212, 25, 0)";
                message.style.marginTop = "10px";
                message.style.height = "auto";
                message.innerHTML = "Du måste fylla i alla fält korrekt! - En arbetstitel, en arbetsplats, samt start och sluttdatum för ditt arbete";
            }else{
                if(response.status === 201) {
                    message.style.color = "green";
                    message.style.marginTop = "10px";
                    message.style.height = "auto";
                    message.innerHTML = "En arbetserfarenhet lades till!";
                }else {
                    message.style.color = "rgb(212, 25, 0)";
                    message.style.marginTop = "10px";
                    message.style.height = "auto";
                    message.innerHTML = "något gick fel...";
                }
            }
            
        })
        .then(data =>{
            getAllJobs();

            titleInput.value = "";
            workplaceInput.value = "";
            startdateInput.value = "";
            enddateInput.value = "";

        })

        
        .catch(error => {
            console.log('Error', error);
        })
        
        
}

//Hämta specifik kurs, skriver ut i formuläret
function getJobById(id, title, workplace, startdate, enddate) {


    formHeading.innerHTML = "Uppdatera arbetserfarenhet";
    window.scrollTo(0, 0);

    message.innerHTML = "";
    
    updateBtn.style.display = "block";
    addButtonEl.style.display ="none";

    titleInput.value = title;
    workplaceInput.value = workplace;
    startdateInput.value = startdate;
    enddateInput.value = enddate;

    // hämtar update vid klick
    updateBtn.addEventListener("click", function(e){

        e.preventDefault();
        updateJob(id);

    });

}

//Uppdaterar specifik kurs från inputfält i formuläret, skriver ut...
function updateJob(id) {
    
    //inputvariabler
    let title = titleInput.value;
    let workplace = workplaceInput.value;
    let startdate = startdateInput.value;
    let enddate = enddateInput.value;
    
    let workObj = {'title': title, 'workplace': workplace, 'startdate': startdate, 'enddate': enddate};
    
    // kollar input och hämtar
    if(title == "" || workplace == "" || startdate == "" || enddate == ""){
        message.style.color = "rgb(212, 25, 0)";
        message.style.marginTop = "10px";
        message.style.height = "auto";
        message.innerHTML = "Du måste fylla i alla fält korrekt för att uppdatera din arbetserfarenhet!";
    }else{
        fetch("https://dt173g_portfolio_restapi.afagerberg.se/workexperience?jobid=" + id,{
        method:'PUT',
        headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify(workObj),

        })
        .then(response => {
            
                response.json()
                //kontrollerar response
                if(response.status === 200) {

                    message.style.color = "green";
                    message.style.marginTop = "10px";
                    message.style.height = "auto";
                    message.innerHTML = "Din arbetserfarenhet uppdaterades!";

                    window.setTimeout(function(){location.reload()},2000);

                }else {
                    message.style.color = "rgb(212, 25, 0)";
                    message.style.marginTop = "10px";
                    message.style.height = "auto";
                    message.innerHTML = "något gick fel...";
                    
                }
            
            

        })
        .then(data =>{

            getAllJobs();

            updateBtn.style.display = "none";
            addButtonEl.style.display = "block";

        })


        .catch(error => {
            console.log('Error', error);
        })

        id="";
        titleInput.value = "";
        workplaceInput.value = "";
        startdateInput.value = "";
        enddateInput.value = "";

        formHeading.innerHTML = "Lägg till arbetserfarenhet";
    }


}

// Raderar specifik kurs
function deleteJob(id) {
    fetch("https://dt173g_portfolio_restapi.afagerberg.se/workexperience?jobid=" + id, {
        method: 'DELETE',

    })
    .then(response =>{ 
        message.style.marginTop = "10px";
        message.style.height = "auto";
        message.style.color = "green";
        message.innerHTML = "Arbetserfarenheten är raderad!";
        response.json() })
    .then(data =>{
        getAllEducations();
    })
    .catch(error => {
        console.log('Error', error);
    })
}