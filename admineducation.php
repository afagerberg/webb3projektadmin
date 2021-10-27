<!-- Projekt DT173G av Alice Fagerberg-->
<?php 
$page_title ="mina utbildingar";
include("includes/header.php");     
?>
    
        <h2 id="formheading">Lägg till utbildning</h2>
        
        <form id="postform">
            <label for="coursecode"> Kurskod:<br>
            <input type="text" name="coursecode" id="coursecode"></label><br>
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
            <button id="add" class="box1">Lägg till utbildning</button>
            <button id="update" class="box1"> Uppdatera utbildning</button>
        </form>
        <p id="message"></p>

        <h2 id="educationheading">Mina utbildningar</h2>
        <table>
            <thead id="theadedu">
                <!-- tabell-->
                <tr>
                    <th>Kurskod</th>
                    <th>Kursnamn</th>
                    <th>Program</th>
                    <th>Lärosäte</th>
                    <th>Startdatum</th>
                    <th>Slutdatum</th>
                </tr>
            </thead>
            <!-- utskrift-->
            <tbody id="eduprinttable">
          </tbody>
        </table>
        <!-- utskrift mobil-->
        <div id="eduprintlist">

        </div>

<?php include("includes/footer.php") ?>