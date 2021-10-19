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
    
        <h2 id="formheading">Lägg till webbplatser som du har utvecklat</h2>
        
        <form id="postform">
            <label for="pagetitle"> Webbplatstitel:<br>
            <input type="text" name="pagetitle" id="pagetitle"></label><br>
            <label for="weburl"> Webblänk:<br>
            <input type="text" name="weburl" id="weburl"></label><br>
            <label for="description" id="labeldesc"> Beskriv din webbplats:</label><br>
            <textarea name="description" id="description"  rows="10"></textarea><br>

            <button id="add">Lägg till webbplats</button>
            <button id="update"> Uppdatera webbplats</button>
        </form>
        <p id="message"></p>

        <h2 id="educationheading">Mina webbplatser</h2>
        <table>
            <thead id="theadedu">
                <!-- Titelegenskaper för tillagd vara-->
                <tr>
                    <td>Titel webbplats</td>
                    <td>Beskrivning</td>
                    <td>Webblänk</td>
                </tr>
            </thead>
            <!-- Här läggs tillagda objekt (vid klick på lägg till-knapp på enskild produkt-sida)-->
            <tbody id="printtable">
          </tbody>
        </table>
        <div id="printlist">

        </div>
    </div>
<footer>
    <p>Webbutveckling III Projekt // Alice Fagerberg</p>
</footer>    


    
<script src="js/main.js"></script>    
</body>
</html>