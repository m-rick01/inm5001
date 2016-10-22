<?php

// Connexion a la base de donnees Oracle (reste a valider username, pw, database)

$connexion = oci_connect($username, $password, $connection_string); //todo

if (!$connexion) {
    $error = oci_error();

    echo $error['errorMessage'], "\n";
    trigger_error(htmlentities($error['errorMessage'], ENT_DISALLOWED), E_USER_WARNING);
}
?>


