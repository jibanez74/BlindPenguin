<?php
include ("data.php");
include ("header.html");
?>

<!-- header -->
<header id="welcome" class="text-white">
  <div class="header-content">
    <div class="header-content-inner">

      <h1>
        Bienvenidos<i class="fa fa-exclamation"></i>
      </h1>

      <hr class="hr-light">

      <p>
        Desarrollo web con tecnologías punteras
      </p>

      <a href="#about" class="btn btn-warning btn-xl" role="button">
        Conócenos <i class="fa fa-arrow-circle-o-down"></i>
      </a>
    </div>
  </div> <!-- header content -->
</header>

<!-- about -->
<section id="about" class="bg-warning text-dark">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 col-sm-12">
        <h2 class="text-center section-heading">
          Acerca de Nosotros<i class="fa fa-exclamation"></i>
        </h2>

        <hr class="hr-dark">

        <p class="lead">
          <?php echo $about; ?>
        </p>

        <div class="text-center">
          <a href="#services" class="btn btn-light btn-xl" role="button">
            Ver Servicios <i class="fa fa-arrow-circle-o-down"></i>
          </a>
        </div> <!-- space for btn -->
      </div> <!-- col md 8 sm 12 -->
    </div> <!-- row -->
  </div> <!-- container -->
</section> <!-- about -->

<section id="services">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-dark">
          Servicios<i class="fa fa-exclamation"></i>
        </h2>

        <hr class="hr-dark">

        <p>
          Nuestros servicios incluyen, pero no están limitados a
        </p>
      </div> <!-- col lg 12 -->
    </div> <!-- row -->
  </div> <!-- container -->

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card-group">
          <?php
          foreach ($services as $item) {?>
            <div class="card m-lg-4 m-3 bg-none">
              <div class="card-header text-center">
                <img class="img-fluid img-thumbnail rounded-circle" src="images/<?php echo $item[img]; ?>.png">
              </div>
              <div class="card-body text-center">
                <h1 class="h4 card-title">
                  <?php echo $item[title]; ?>
                </h1>

                <p class="card-text">
                  <?php echo $item[subtitle]; ?>
                </p>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-secondary btn-block" data-toggle="modal" data-target="<?php echo $item[btn]; ?>">
                  Más Información
                </button>
              </div>
            </div>
            <?php
          }
          ?>
        </div> <!-- card group -->
      </div> <!-- col md 12 -->
    </div> <!-- row -->
  </div> <!-- container -->
</section> <!-- services -->

<section id="github">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="text-dark section-heading">
          Github<i class="fa fa-exclamation"></i>
        </h2>

        <hr class="hr-dark">

        <p>
          A continuación encontrarás algunos de nuestros proyectos que están alamacenados en nuestra página de Github
        </p>
      </div> <!-- col lg 12 -->
    </div> <!-- row -->
  </div> <!-- container -->

  <div class="container-fluid">
    <div class="row">
      <div id="info" class="col-md-4">

      </div> <!-- col md 4 -->

      <div id="repos" class="col-md-8">

      </div> <!-- col md 8 -->
    </div> <!-- row -->
  </div> <!-- container -->
</section>

<section id="websites">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-dark">
          Websites<i class="fa fa-exclamation"></i>
        </h2>

        <hr class="hr-dark">

        <p>
          Ejemplos de plantillas web
        </p>
      </div> <!-- col lg 12 -->
    </div> <!-- row -->
  </div> <!-- container -->

  <div class="row no-gutters">
    <?php
    foreach ($websites as $item) {?>
      <div class="col-lg-4 col-sm-6">
        <a href="<?php echo $item[link]; ?>" class="portfolio-box" target="_blank">
          <img src="images/<?php echo $item[img]; ?>.png" class="img-fluid" alt="imagen de portfolio">

          <div class="portfolio-box-caption">
            <div class="portfolio-box-caption-content">
              <div class="project-category text-white">
                <?php echo $item[description]; ?>
              </div> <!-- category -->

              <div class="project-name">
                <?php echo $item[title]; ?>
              </div> <!-- project name -->
            </div> <!-- caption content -->
          </div> <!-- caption -->
        </a>
      </div> <!-- col lg 4 sm 6 -->
      <?php
    }
    ?>
  </div> <!-- row -->
</section>

<section id="contact" class="mb-3">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-dark">
          Contáctanos<i class="fa fa-exclamation"></i>
        </h2>

        <hr class="hr-dark">

        <p>
          Para ponerte en contacto con nosotros, simplemente llena el formulario de contact más abajo.  Te responderemos con la mayor brevedad posible.
        </p>
      </div> <!-- col lg 12 -->
    </div> <!-- row -->
  </div> <!-- container -->

  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="card bg-light text-dark">
        <div class="card-header" id="card-header-form">
        <h3 class="card-title text-center">
                            Mensaje Enviado!
                        </h3>

                        <p class="text-center card-text">
                            Gracias por ponerte en contacto con nosotros.  Responderemos a tu email con la mayor brevedad posible.
                        </p>
        </div> <!-- card header -->

          <div id="card-body-form" class="card-body">
            <form id="myForm">
              <h3 class="card-title text-center"> Formulario de Contacto </h3>

              <div class="form-group">
                <label for="nombre"> Tú nombre </label>
                <input type="text" class="form-control" id="nombre" name="name" placeholder="escribe tu nombre">
                <div class="alert alert-danger myAlert" id="alert-name">
                    <p> Por favor escribe tu nombre </p>
                </div>
              </div>

              <div class="form-control">
                <label for="email"> Tú email </label>
                <input type="text" class="form-control" id="email" name="email" placeholder="escribe tu email">
                <div id="alert-email" class="alert alert-danger myAlert">
                  <p> Por favor escribe una dirección de email válida </p>
                </div>
              </div>

              <div class="form-control">
                <label for="mensaje"> Tú mensaje </label>
                <textarea id="mensaje" name="message" class="form-control" rows="5"></textarea>
                <div class="alert alert-danger myAlert" id="alert-msg">
                  <p> Por favor escribe tu mensaje </p>
                </div>
              </div>

              <input type="submit" value="Enviar" class="btn btn-light btn-block" name="submit" id="submit">
            </form>
          </div> <!-- card body -->
        </div> <!-- card -->
      </div> <!-- col md 6 sm 12 -->

      <div class="col-md-1"></div>

      <div class="col-md-4">
        <img src="images/bpc-logo.png" class="img-fluid d-none d-md-block" alt="logo de BlindPenguin">
      </div> <!-- col md 4 -->

      <div class="col-md-1"></div>
    </div> <!-- row -->
  </div> <!-- container -->
</section> <!-- contact -->

<?php
foreach ($modals as $item) {?>
  <div class="modal fade" id="<?php echo $item[number]; ?>">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-heading">
          <h3 class="modal-title">
            <?php echo $item[title]; ?>
          </h3>
        </div> <!-- header -->

        <div class="modal-body">
          <p> <?php echo $item[description]; ?> </p>
        </div> <!-- body -->

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal">
            Cerrar
          </button>
        </div> <!-- footer -->
      </div> <!-- modal content -->
    </div> <!-- modal dialog -->
  </div> <!-- modal -->"
  <?php
}
?>

<?php include ("footer.html"); ?>
