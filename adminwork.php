<!-- Projekt DT173G av Alice Fagerberg-->
<?php include("includes/config.php"); ?>
<?php

    // Kontroll om användare inloggad
    if(!isset($_SESSION['username'])){
        header("location: index.php?message=Logga in för att administera...");
    }

?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <title>Webbutveckling III moment 5</title>
</head>
<body>
    <header>
        <p>digiCV<br>admin</p>

        <ul class="mybuttons">
        <li><a href="admineducation.php" class="goto"> Utbildningar</a></li>
        <li><a href="adminwork.php" class="goto">Arbetserfarenhet</a></li>
        <li><a href="adminwebpages" class="goto">Webbplatser</a></li>
        <li><a href="logout.php" class="logout">Logga ut</a></li>
        
        </ul>

    </header>

    <div id="educontent">
    
        <h2 id="formheading">Lägg till arbetserfarenhet</h2>
        
        <form id="form">
            <label for="title"> Arbetstitel:<br>
            <input type="text" name="title" id="title"></label><br>
            <label for="workplace"> Arbetsplats:<br>
            <input type="text" name="workplace" id="workplace"></label><br>
            <label for="startdate">Startdatum:<br>
            <input type="date" name="startdate" id="startdate"></label><br>
            <label for="enddate">Slutdatum<br>
            <input type="date" name="enddate" id="enddate"></label><br>
            <button id="add">Lägg till arbete</button>
            <button id="update"> Uppdatera arbete</button>
        </form>
        <p id="message"></p>

        <h2 id="educationheading">Min arbetserfarenhet</h2>
        <table>
            <thead id="theadedu">
                <!-- Titelegenskaper för tillagd vara-->
                <tr>
                    <td>Arbetstitel</td>
                    <td>arbetsplats</td>
                    <td>Startdatum</td>
                    <td>Slutdatum</td>
                </tr>
            </thead>
            <!-- Här läggs tillagda objekt (vid klick på lägg till-knapp på enskild produkt-sida)-->
            <tbody id="workprinttable">
          </tbody>
        </table>
        <div id="workprintlist">

        </div>
    </div>
<footer>
    <p>Webbutveckling III Projekt // Alice Fagerberg</p>
</footer>    


    
<script src="js/main.js"></script>    
</body>
</html>