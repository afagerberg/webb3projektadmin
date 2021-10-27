<?php
//användaruppgifter

$myusername = false;
$mypassword = false;

function login(){

    $myusername;
    $mypassword;
    
    if($myusername === false || $mypassword === false ){

        $message = "Felaktigt användarnamn/lösenord!";
        
    } else{
        $_SESSION['username'] = $myusername;
    }
}



?>