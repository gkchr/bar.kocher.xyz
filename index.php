<!DOCTYPE html>
<html lang="de">

<head>

    <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta charset="utf-8">
    <title>bar.kocher.xyz</title>
    <meta name="description" content="">
    <meta name="author" content="Gerhard Kocher">

    <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">

    <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="stylesheet" href="_global/css/normalize.css">
    <link rel="stylesheet" href="_global/css/skeleton.css">
    <style>
        h1:hover {
			background-image: linear-gradient(90deg,fuchsia,blue,aqua,green,yellow,orange,red);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
        }
        #tools {
            display: table;
            border-spacing: 0 1.24rem;
        }
        #tools li {
            display: table-row;
        }
        #tools li a {
            display: table-cell;
            padding-right: 1rem;
            white-space: nowrap;
        }
        #tools li a + a {
            color: initial;
            text-decoration: none;
        }
	</style>

    <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link href="_global/images/favicon.ico" rel="icon" type="image/x-icon" />

</head>

<body>

    <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <main class="container">
        <div class="row">
            <div class="one-half column">
				<h1>bar.kocher.xyz</h1>
				<p>Eine Sammlung verschiedener Werkzeuge:</p>
				<ul id="tools">
<?php

$path = ".";

$folders = scandir($path);
$files = array();

foreach($folders as $f) {
    if(substr($f, 0, 1) === ".") continue; // skip ., .., .hidden
    if(substr($f, 0, 1) === "_") continue; // skip _
    if(!is_dir($f)) continue;

    $title = getPageTitle($f."/index.php");

    echo "					<li><a href=\"/$f\">/$f</a> <a href=\"/$f\">$title</li></a>\n";
}

?>
				</ul>
				
				<p class="info">Die Nutzung der auf diesen Websites zur Verfügung gestellten Funktionen erfolgt auf eigene Gefahr und Verantwortung des Benutzers und ohne Garantie für die ständige Verfügbarkeit.</p>
				
				<p class="copyright">by <a href="https://www.kocher.xyz">Gerhard Kocher</a> <?php echo date("Y"); ?>.</p>
			</div>
		</div>
	</main>

</body>

</html>
<?php


function getPageTitle($url) {
    $fp = file_get_contents($url);
    if (!$fp)
        return null;

    $res = preg_match("/<title>(.*)<\/title>/siU", $fp, $title_matches);
    if (!$res)
        return null;

    // Clean up title: remove EOL's and excessive whitespace.
    $title = preg_replace('/\s+/', ' ', $title_matches[1]);
    $title = trim($title);
    return $title;
}