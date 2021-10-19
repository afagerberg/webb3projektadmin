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
        <li><a href="admineducation.php"> Utbildningar</a></li>
        <li><a href="adminwork.php">Arbetserfarenhet</a></li>
        <li><a href="adminwebpages">Webbplatser</a></li>
        <li><a href="logout.php" class="logout">Logga ut</a></li>
        
        </ul>

    </header>

    <div id="educontent">
    
        <h2 id="formheading">Lägg till utbildning</h2>
        
        <form id="postform">
            <label for="courseid"> Kurskod:<br>
            <input type="text" name="courseid" id="courseid"></label><br>
            <label for="cname"> Kursnamn:<br>
            <input type="text" name="cname" id="cname"></label><br>
            <label for="program"> Program:<br>
            <input type="text" name="program" id="program"></label><br>
            <label for="eduplace"> Lärosäte:<br>
            <input type="text" name="eduplace" id="eduplace"></label><br>
            <label for="startdate">Startdatum:<br>
            <input type="date" name="startdate" id="startdate"></label><br>
            <label for="enddate">Slutdatum<br>
            <input type="date" name="enddate" id="enddate"></label><br>
            <button id="add">Lägg till utbildning</button>
            <button id="update"> Uppdatera utbildning</button>
        </form>
        <p id="message"></p>

        <h2 id="educationheading">Mina utbildningar</h2>
        <table>
            <thead id="theadedu">
                <!-- Titelegenskaper för tillagd vara-->
                <tr>
                    <td>Kurskod</td>
                    <td>Kursnamn</td>
                    <td>Program</td>
                    <td>Lärosäte</td>
                    <td>Startdatum</td>
                    <td>Slutdatum</td>
                </tr>
            </thead>
            <!-- Här läggs tillagda objekt (vid klick på lägg till-knapp på enskild produkt-sida)-->
            <tbody id="eduprinttable">
          </tbody>
        </table>
        <div id="eduprintlist">

        </div>
    </div>
<footer>
    <p>Webbutveckling III Projekt // Alice Fagerberg</p>
</footer>    
    
<script src="js/main.js"></script>   
</body>
</html>