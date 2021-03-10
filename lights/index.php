<!DOCTYPE html>
<html lang="de">

<head>

    <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta charset="utf-8">
    <title>LIGHTS - Die Lichtsteuerung</title>
    <meta name="description" content="">
    <meta name="author" content="Gerhard Kocher">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
    <script src="js/jscolor.min.js"></script>
    <script src="js/ntc.js"></script>

    <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta name='viewport' content='width=device-width, initial-scale=1.0; user-scalable=no;' />

    <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Two+Tone|Material+Icons+Sharp">

    <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="stylesheet" href="../_global/css/normalize.css">
<!--    <link rel="stylesheet" href="../_global/css/material.min.css">-->
<!--    <link rel="stylesheet" href="../_global/css/skeleton.css">-->
    <link rel="stylesheet" href="css/minimalist.css?ver=<?php echo rand(1000, 9000); ?>">
    <link rel="stylesheet" href="css/colorhexagons.css">

    <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link href="../_global/images/favicon.ico" rel="icon" type="image/x-icon" />

    <!-- Head-Scripts
–––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <script src="js/colorhexagons.js"></script>

</head>

<body>

<!-- Primary Page Layout
–––––––––––––––––––––––––––––––––––––––––––––––––– -->
<main class="container">
    <h2>LIGHTS - Die&nbsp;Lichtsteuerung</h2>


    <section class="lights">
        <article class="card">
            <header>
                <span class="material-icons">lightbulb</span>
            </header>
            <label for="wall">
                <h3>Wall</h3>
                <p></p>
            </label>
            <footer>
                <label class="select">
                    <input type="radio" name="selected" class="selector" value="wall" id="wall">
                    <span></span>
                </label>
            </footer>

            <section class="ui">
                <div class="color"><input type="hidden" class="color_value"></div>
                <div class="buttons">
                    <button class="material-icons-two-tone off">power_settings_new</button>
                    <button class="material-icons-two-tone shine">wb_incandescent</button>
                    <button class="material-icons-two-tone effects">waves</button>
                </div>
                <div class="brightness">
                    <input type="range" min="0" max="20" value="17" class="slider">
                </div>
                <div class="controls">
                    <div class="mqtt two-buttons">
                        <button class="material-icons-two-tone half load">cloud_download</button>
                        <button class="material-icons-two-tone half send">publish</button>
                    </div>
                </div>
            </section>
        </article>

        <article class="card">
            <header>
                <span class="material-icons">lightbulb</span>
            </header>
            <label for="barfront">
                <h3>Barfront</h3>
                <p></p>
            </label>
            <footer>
                <label class="select">
                    <input type="radio" name="selected" class="selector" value="barfront" id="barfront">
                    <span></span>
                </label>
            </footer>

            <section class="ui">
                <div class="color"><input type="hidden" class="color_value"></div>
                <div class="buttons">
                    <button class="material-icons-two-tone off">power_settings_new</button>
                    <button class="material-icons-two-tone shine">wb_incandescent</button>
                    <button class="material-icons-two-tone effects">waves</button>
                </div>
                <div class="brightness">
                    <input type="range" min="0" max="20" value="17" class="slider" id="brightness_slider">
                </div>
                <div class="controls">
                    <div class="mqtt two-buttons">
                        <button class="material-icons-two-tone half load">cloud_download</button>
                        <button class="material-icons-two-tone half send">publish</button>
                    </div>
                </div>
            </section>
        </article>

        <article class="card">
            <header>
                <span class="material-icons">lightbulb</span>
            </header>
            <label for="counter">
                <h3>Counter</h3>
                <p></p>
            </label>
            <footer>
                <label class="select">
                    <input type="radio" name="selected" class="selector" value="counter" id="counter">
                    <span></span>
                </label>
            </footer>

            <section class="ui">
                <div class="color"><input type="hidden" class="color_value"></div>
                <div class="buttons">
                    <button class="material-icons-two-tone off">power_settings_new</button>
                    <button class="material-icons-two-tone shine">wb_incandescent</button>
                    <button class="material-icons-two-tone effects">waves</button>
                </div>
                <div class="brightness">
                    <input type="range" min="0" max="20" value="17" class="slider" id="brightness_slider">
                </div>
                <div class="controls">
                    <div class="mqtt two-buttons">
                        <button class="material-icons-two-tone half load">cloud_download</button>
                        <button class="material-icons-two-tone half send">publish</button>
                    </div>
                </div>
            </section>
        </article>
    </section>

    <p class="copyright">by <a href="mailto:gerhard@kocher.xyz">Gerhard Kocher</a> <?php echo date("Y"); ?>. <em>Made with &lt;3</em><br/></p>



</main>

<!-- Scripts
–––––––––––––––––––––––––––––––––––––––––––––––––– -->
<!--<script src="js/script.js?v=0.3"></script>-->
<script src="js/ui.js?v=0.3"></script>

</body>

</html>