<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home - SOS Medicamentos</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&display=swap" rel="stylesheet">
  <?php include('./ADM/bootstrap.html') ?>


</head>

<body>

  <header>
    <!---- MENU --->
    <?php include('./includes/menu.html') ?>

  </header>

  <main>

        <div class="jumbotron jumbotron-fluid text-sm-center" style="background: rgba(253, 253, 253, 0);">
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col" style="font-family: Bebas Neue; font-size: 40px; color:#00b9b3;">
                <h1>
                 Faltou medicamento na Unidade básica de saude (UBS)?
                </h1>
                <h1>
                <a href="./register_notification.php" style="font-family: Bebas Neue; font-size: 40px; color:#6f42c1;">
                  Notifique a falta
                <i class="far fa-hand-pointer"></i>
                </a> 
                </h1>

              </div>
              <div class="col">
                <img class="float-center" width="250rem" src="./img/pill.svg" alt="medicamento">

              </div>
            </div>
          </div>
        </div>

  <!-- <style>

        /* nome das classes => home_ClassNameBootstrap */

    .home_card{
        background: #00b9b3;
        border-radius: 15px;
        border-style: none;
    }

    .home-btn {
        width: 100%;
        background: #6f42c1;
        font-family: Bebas Neue;
        font-weight: normal;
        font-size: 20px;
        border-style: none;
    }

    .home-btn:hover {
        background: #5962e4;
    }


  </style> -->
  <section>
      <div class="container">
        <div class="row">
          

          <div class="col-md-4">
            <div class="card mb-4 home_card">
              <div class="card-body"
                  <h4 class="card-title" style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;">ultimas NOTIFICAções </h4>
                 
                  <p class="card-text" 
                  style="color: #ffffff;font-size: 20px; margin-top: 10px;">
                    O acesso à informação junto com o direito à saúde, são uns dos direitos fundamentais.
                  </p>

                  <button class="btn btn-primary home-btn" type="button">ACESSAR</button>
              </div>
            </div>
          </div>


          <div class="col-md-4">
            <div class="card mb-4 home_card">
              <div class="card-body"
                  <h4 class="card-title" style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;">Registre sua Notificação</h4>
                 
                  <p class="card-text" 
                  style="color:#ffffff;font-size: 20px; margin-top: 10px;">
                  Notifique da falta de algum dos medicamento que deveria ser fornecido pelo Sistema Único de Saúde.
                  </p>

                  <button class="btn btn-primary home-btn" type="button">Notificar</button>
              </div>
            </div>
          </div>


          <div class="col-md-4">
            <div class="card mb-4 home_card">
              <div class="card-body"
                  <h4 class="card-title" style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;">Últimos 30 dias</h4>
                 
                  <p class="card-text" 
                  style="color: #ffffff;font-size: 20px; margin-top: 10px;">
                  Medicamento com mais notificações de faltas:
                  UBS com mais notificações de faltas:
                  </p>

                  <button class="btn btn-primary home-btn" type="button">SOBRE</button>
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
