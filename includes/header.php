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
    <title><?= $site_title . $divider . $page_title; ?></title>
</head>
<body>
    <header>
        <a href="index.php"><div class="logobox"></div></a>

        <ul class="mybuttons">
        <li><a href="admineducation.php"> Utbildningar</a></li>
        <li><a href="adminwork.php">Arbetserfarenhet</a></li>
        <li><a href="adminwebpages">Webbsidor</a></li>
        <li><a href="logout.php" class="logout">Logga ut</a></li>
        
        </ul>

    </header>

    <div id="content">
        <h1 id ="subheadline">Administrera min digitala portfolio</h1>