<?php include("includes/config.php"); ?>
<?php

    if(isset($_POST['username'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        if($username == "digiuser01" && $password == "ilikepotatoes"){
            $_SESSION['username'] = $username;
            
        }else {
            $message = "Felaktigt användarnamn/lösenord!";
        }
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <title>Logga in till digiCV admin</title>
</head>
<body>


<div id="admin">
<div id="frontlogo">

</div>
    <h2>Administera mitt digitala CV</h2>

<?php
    if(isset($_GET['message'])) {
        echo "<p>" . $_GET['message'] . "</p>";
    }

    if(isset($message)) {
        echo "<p>" . $message . "</p>";
    }

?>
<?php
    if(!isset($_SESSION['username'])){
    
?>
    <form id="loginform" method="post" action="index.php">
        <label for="username">Användarnamn:</label>
        <br>
        <input type="text" name="username" id="username"><br>
        <label for="password">Lösenord:</label>
        <br>
        <input type="password" name="password" id="password"><br>
        <input id ="loginbtn" type="submit" value="Logga in">
    </form>
<?php
    }else {
?>
        <ul class="admintopics">
        <li><a href="admineducation.php" class="box1"> Utbildningar</a></li>
        <li><a href="adminwork.php" class="box2">Arbetserfarenhet</a></li>
        <li><a href="adminwebpages" class="box4">Webbplatser</a></li>
        <li><a href="adminwebpages" class="box3">Se mitt digiCV</a></li>   
    </ul>
    <a href="logout.php" class="logout">Logga ut</a>
<?php
    }
?>

    

</div>

    
</body>
</html>