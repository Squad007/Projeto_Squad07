<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />


  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home - SOS Medicamentos</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <?php include('./ADM/bootstrap.html') ?>


</head>

<body>

  <header>
    <!---- MENU --->
    <?php include('./includes/menu.html') ?>

  </header>

  <main style="min-height: 68vh">

    <div class="jumbotron jumbotron-fluid text-sm-center" style="background: rgba(253, 253, 253, 0);">
      <div class="container">
        <div class="row">
          <div class="col" style="color:#00b9b3; text-align: left;">
            <h1 style="line-height: 1.2; font-size: 50px;">
              Faltou medicamento na Unidade básica de saude (UBS)?
            </h1>
            <p>
              <a class="btn btn-primary" href="./register_notification.php" type="button" style="background: #6f42c1; font-family: Bebas Neue;font-size: 25px; border: none;">
                Notifique a falta <i class="fas fa-exclamation-circle"></i>
              </a>
            </p>

          </div>
          <div class="col animate__animated animate__pulse animate__delay-1s">
            <img class="float-right" src="./img/pill.svg" alt="medicamento" style="max-width:310px; min-width: 150px;">

          </div>
        </div>
      </div>
    </div>

    <section>
      <div class="container">
        <div class="row">

          <div class="col-md-4 my-3">
            <div class="card mb-4 home_card h-100">
              <div class="card-body">
                <h4 class="card-title" style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;">ultimas NOTIFICAções </h4>

                <p class="card-text" style="color: #ffffff;font-size: 20px; margin-top: 10px;">
                  Veja as últimas notificações. O acesso à informação é um dos dos direitos fundamentais garantido na nossa Constituição.
                </p>
              </div>
              <div class="card-footer">
                <a class="btn btn-primary home-btn" href="./notification.php" type="button">ACESSAR</a>
              </div>
            </div>
          </div>


          <div class="col-md-4 my-3">
            <div class="card mb-4 home_card h-100">
              <div class="card-body" <h4 class="card-title" style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;">Registre sua Notificação</h4>

                <p class="card-text" style="color:#ffffff;font-size: 20px; margin-top: 10px;">
                  Notifique da falta de algum dos medicamento que deveria ser fornecido pelo Sistema Único de Saúde.
                </p>
              </div>
              <div class="card-footer">
                <a class="btn btn-primary home-btn" href="./register_notification.php" type="button">Notificar</a>
              </div>
            </div>
          </div>


          <div class="col-md-4 my-3">
            <div class="card mb-4 home_card h-100">
              <div class="card-body" <h4 class="card-title" style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;">Sobre Nós</h4>

                <p class="card-text" style="color: #ffffff;font-size: 20px; margin-top: 10px;">
                  Somos o Squad 07 (SP1) da Recode Pro 2020. Estamos trabalhando para desenvolver ferramentas que ajude a comunidade.
                </p>
              </div>
              <div class="card-footer">
                <a class="btn btn-primary home-btn" href="./contact.php" type="button">CONTATO</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


  </main>


  <?php include('./includes/rodape.html') ?>

</body>

</html>