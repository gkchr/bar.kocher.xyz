<?php

$folder = "data/"; // with trailing slash!
$file = $folder . "drinks.txt";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "POST";
}



if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    echo "DELETE";
}