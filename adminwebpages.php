<?php 
    include_once("includes/config.php");
    $page_title ="mina webbsidor";
    include("includes/header.php");    
?>
   
        <h2 id="formheading">Lägg till webbsidor som du har utvecklat</h2>
        <!-- inputformulär utvecklad webbsida-->
        <form id="postform">
            <label for="pagetitle"> Webbsidestitel:<br>
            <input type="text" name="pagetitle" id="pagetitle"></label><br>
            <label for="weburl"> Webblänk:<br>
            <input type="text" name="weburl" id="weburl"></label><br>
            <label for="description" id="labeldesc"> Beskriv din webbsida:</label><br>
            <textarea name="description" id="description"  rows="10"></textarea><br>

            <button id="add" class="webbtn">Lägg till webbsida</button>
            <button id="update" class="webbtn"> Uppdatera webbsida</button>
        </form>
        <p id="message"></p>

        <h2 id="webpagesheading">Mina webbsidor</h2>
        <table>
            <thead id="theadwebp">
                <!-- Titelegenskaper för tillagd vara-->
                <tr>
                    <td>Titel webbsida</td>
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

<?php include("includes/footer.php"); ?>
    
<script src="js/webpages.js"></script>    
</body>
</html>