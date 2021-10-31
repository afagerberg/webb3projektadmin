<?php 
include_once("includes/config.php");
$page_title ="min arbetserfarenhet";
include("includes/header.php");     
?>
    
        <h2 id="formheading">Lägg till arbetserfarenhet</h2>
        <!-- inputformulär arbete-->
        <form id="postform">
            <label for="worktitle"> Arbetstitel:<br>
            <input type="text" name="worktitle" id="worktitle"></label><br>
            <label for="workplace"> Arbetsplats:<br>
            <input type="text" name="workplace" id="workplace"></label><br>
            <label for="startdate">Startdatum:<br>
            <input type="date" name="startdate" id="startdate"></label><br>
            <label for="enddate">Slutdatum<br>
            <input type="date" name="enddate" id="enddate"></label><br>
            <button id="add" class="workbtn">Lägg till arbete</button>
            <button id="update" class="workbtn"> Uppdatera arbete</button>
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

<?php include("includes/footer.php"); ?>
    
<script src="js/work.js"></script>    
</body>
</html>