<?php
    // Kontroll om användare inloggad
    if(!isset($_SESSION['username'])){
        header("location: index.php?message=Logga in för att administera...");
    }

?>
<!-- DT173G Projekt administrationsgränssnitt, Alice Fagerberg-->
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $site_title . $divider . $page_title; ?></title>
    <link rel="stylesheet" href="css/main.css">

    <!-- favikon-->
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" type="image/png" href="images/ikon.png">

</head>
<body>
    <!-- Sidhuvud med navigering-->
    <header>
        <a class="a_logo" href="index.php">
            <div class="logobox">
                <img src="images/logoadmin.png" alt="Logotyp">
            </div>
        </a>

        <ul class="mybuttons">
        <li><a href="admineducation.php"> Utbildningar</a></li>
        <li><a href="adminwork.php">Arbetserfarenhet</a></li>
        <li><a href="adminwebpages.php">Webbsidor</a></li>
        <li><a href="logout.php" class="logout">Logga ut</a></li>
        
        </ul>

    </header>
    <!-- Sidinnehåll-->
    <div id="content">
        <h1 id ="subheadline">Administrera min digitala portfolio</h1>