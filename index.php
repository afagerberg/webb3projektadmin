<?php //DT173G  Projekt administrationsgränssnitt, Alice Fagerberg
include("includes/config.php"); 

//Koll inloggning
    if(isset($_POST['username'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        //Tillåt inloggning när input matchar
        if($username === $myusername && $password === $mypassword){
            $_SESSION['username'] = $username;
            
        }else {
            $message = "Felaktigt användarnamn/lösenord!";
        }
    }

?>
<!-- DT173G Projekt administrationsgränssnitt, Alice Fagerberg-->
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>afagerberg admin | Administera min digitala portfolio</title>
    <link rel="stylesheet" href="css/main.css">

    <!-- favikon-->
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" type="image/png" href="images/ikon.png">

</head>
<body>


<div id="admin">
<div id="frontlogo">
    <img src="images/logoadmin.png" alt="Logotyp">
</div>
    <h1>Administera min digitala portfolio</h1>

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
        <li><a href="adminwebpages.php" class="box3">Webbsidor</a></li>
        <li><a href="https://portfolio.afagerberg.se/" target ="_blank" class="box4">Min portfolio</a></li>   
    </ul>
    <a href="logout.php" class="logout">Logga ut</a>
<?php
    }
?>

</div>

<footer>
    <p>copyright afagerberg admin // Alice Fagerberg</p>
</footer>

    
</body>
</html>