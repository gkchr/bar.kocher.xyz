<!DOCTYPE html>
<html lang="de">

<head>

    <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta charset="utf-8">
    <title>DRINKS - Bar Management</title>
    <meta name="description" content="">
    <meta name="author" content="Gerhard Kocher">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>

    <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">

    <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="stylesheet" href="../_global/css/normalize.css">
    <link rel="stylesheet" href="../_global/css/skeleton.css">
    <link rel="stylesheet" href="css/style.css?v=0.1">

    <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link href="../_global/images/favicon.ico" rel="icon" type="image/x-icon" />

</head>

<body>

    <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <main class="container">
        <div class="row">
            <div class="twelve columns">
				<h3>DRINKS - Das Rezeptbuch</h3>


                <h4>Drinks:</h4>
                <section class="tiles" id="drinks"></section>



                <div class="row tabheader">
                    <div class="twelve columns">
                        <article data-tab="ingredients" class="active">Zutaten</article>
                        <article data-tab="recipe">Rezept</article>
                    </div>
                </div>

                <div class="row">
                    <div class="seven columns tab ingredients">

                        <h4>Zutaten:</h4>
                        <section class="tiles" id="ings"></section>
                        <section class="tiles" id="spirits"></section>
                        <section class="tiles" id="juices"></section>

                    </div>
                    <div class="five columns tab recipe">

                        <div id="recipe">
                            <h4>Rezept:</h4>
                            <p class="name"><em>Drink auswählen!</em></p>
                            <ul class="list"></ul>
                        </div>

                    </div>
                </div>


				<p class="copyright">by <a href="mailto:gerhard@kocher.xyz">Gerhard Kocher</a> <?php echo date("Y"); ?>. <em>Made with &lt;3</em><br/></p>

                <span id="clear">zurücksetzen</span>
            </div>
        </div>



    </main>

    <!-- Scripts
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <script src="js/Drink.class.js?v=0.21"></script>
    <script src="js/BarBook.class.js?v=0.21"></script>
    <script src="js/script.js?v=0.2"></script>

</body>

</html>