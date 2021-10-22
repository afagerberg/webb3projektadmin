<?php include("includes/header.php") ?>
   
        <h2 id="formheading">Lägg till webbplatser som du har utvecklat</h2>
        
        <form id="postform">
            <label for="pagetitle"> Webbplatstitel:<br>
            <input type="text" name="pagetitle" id="pagetitle"></label><br>
            <label for="weburl"> Webblänk:<br>
            <input type="text" name="weburl" id="weburl"></label><br>
            <label for="description" id="labeldesc"> Beskriv din webbplats:</label><br>
            <textarea name="description" id="description"  rows="10"></textarea><br>

            <button id="add" class="box3">Lägg till webbplats</button>
            <button id="update" class="box3"> Uppdatera webbplats</button>
        </form>
        <p id="message"></p>

        <h2 id="webpagesheading">Mina webbplatser</h2>
        <table>
            <thead id="theadwebp">
                <!-- Titelegenskaper för tillagd vara-->
                <tr>
                    <td>Titel webbplats</td>
                    <td>Webblänk</td>
                    <td>Beskrivning</td>
                </tr>
            </thead>
            <!-- Här läggs tillagda objekt (vid klick på lägg till-knapp på enskild produkt-sida)-->
            <tbody id="webptable">
          </tbody>
        </table>
        <div id="webplist">

        </div>
    </div>
<footer>
<p><a href="#">Gå till mitt digiCV</a></p>
    <p>Webbutveckling III Projekt // Alice Fagerberg</p>
</footer>    


    
<script src="js/webpages.js"></script>    
</body>
</html>