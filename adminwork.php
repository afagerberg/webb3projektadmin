<!-- Projekt DT173G av Alice Fagerberg-->
<?php include("includes/header.php") ?>
    
        <h2 id="formheading">Lägg till arbetserfarenhet</h2>
        
        <form id="postform">
            <label for="worktitle"> Arbetstitel:<br>
            <input type="text" name="worktitle" id="worktitle"></label><br>
            <label for="workplace"> Arbetsplats:<br>
            <input type="text" name="workplace" id="workplace"></label><br>
            <label for="startdate">Startdatum:<br>
            <input type="date" name="startdate" id="startdate"></label><br>
            <label for="enddate">Slutdatum<br>
            <input type="date" name="enddate" id="enddate"></label><br>
            <button id="add" class="box2">Lägg till arbete</button>
            <button id="update" class="box2"> Uppdatera arbete</button>
        </form>
        <p id="message"></p>

        <h2 id="workheading">Min arbetserfarenhet</h2>
        <table>
            <thead id="theadwork">
                <!-- tabell-->
                <tr>
                    <th>Arbetstitel</th>
                    <th>Arbetsplats</th>
                    <th>Startdatum</th>
                    <th>Slutdatum</th>
                </tr>
            </thead>
            <!-- tabell utskrift-->
            <tbody id="worktable">
          </tbody>
        </table>

        <!-- Utskrift mobil-->
        <div id="worklist">

        </div>
    </div>
<footer>
<p><a href="#">Gå till portfolio</a></p>
<p>copyright afagerberg | Alice Fagerberg</p>
</footer>    


    
<script src="js/work.js"></script>    
</body>
</html>