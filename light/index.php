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

    <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta name='viewport' content='width=device-width, initial-scale=1.0; user-scalable=no;' />

    <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Two+Tone|Material+Icons+Sharp">

    <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.12.0/css/all.css"
          integrity="sha384-ekOryaXPbeCpWQNxMwSWVvQ0+1VrStoPJq54shlYhR8HzQgig1v5fas6YgOqLoKz" crossorigin="anonymous">
    <link rel="stylesheet" href="../_global/css/normalize.css">
<!--    <link rel="stylesheet" href="../_global/css/material.min.css">-->
    <link rel="stylesheet" href="../_global/css/skeleton.css">
    <link rel="stylesheet" href="css/style.css?ver=<?php echo rand(1000, 9000); ?>">

    <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link href="../_global/images/favicon.ico" rel="icon" type="image/x-icon" />

    <!-- Head-Scripts
–––––––––––––––––––––––––––––––––––––––––––––––––– -->
<!--    <script src="../_global/js/material.min.js"></script>-->

</head>

<body>

<!-- Primary Page Layout
–––––––––––––––––––––––––––––––––––––––––––––––––– -->
<main class="container">
    <div class="row">
        <div class="six columns">
            <h3>LIGHTS - Die&nbsp;Lichtsteuerung</h3>


            <section class="lights">
                <article class="card">
                    <header>
                        <span class="material-icons">lightbulb</span>
                    </header>
                    <main>
                        <h5>Wall</h5>
                        <p></p>
                    </main>
                    <footer>
                        <label class="select">
                            <input type="radio" name="selected" value="wall">
                            <span></span>
                        </label>
                    </footer>
                </article>

                <article class="card">
                    <header>
                        <span class="material-icons">lightbulb</span>
                    </header>
                    <main>
                        <h5>Barfront</h5>
                        <p></p>
                    </main>
                    <footer>
                        <label class="select">
                            <input type="radio" name="selected" value="barfront">
                            <span></span>
                        </label>
                    </footer>
                </article>

                <article class="card">
                    <header>
                        <span class="material-icons">lightbulb</span>
                    </header>
                    <main>
                        <h5>Counter</h5>
                        <p></p>
                    </main>
                    <footer>
                        <label class="select">
                            <input type="radio" name="selected" value="counter">
                            <span></span>
                        </label>
                    </footer>
                </article>
            </section>

            <hr/>

            <section class="controls">
                <button id="color_picker" class="material-icons-two-tone" data-jscolor="">palette</button>
                <input type="hidden" name="color_value" id="color_value">
                <button id="set" class="material-icons-two-tone">format_color_fill</button>
                <button id="warmwhite" class="material-icons-two-tone">lightbulb</button>
                <br/>
                <button id="off" class="material-icons-two-tone">power_settings_new</button>
            </section>

            <hr/>

            <p class="copyright">by <a href="mailto:gerhard@kocher.xyz">Gerhard Kocher</a> <?php echo date("Y"); ?>. <em>Made with &lt;3</em><br/></p>

            <span id="clear">zurücksetzen</span>
        </div>
    </div>



</main>

<!-- Scripts
–––––––––––––––––––––––––––––––––––––––––––––––––– -->
<script src="js/script.js?v=0.3"></script>

</body>

</html>