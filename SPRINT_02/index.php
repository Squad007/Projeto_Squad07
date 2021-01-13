<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home - SOS Medicamentos</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&display=swap" rel="stylesheet">
  <?php include('./ADM/bootstrap.html') ?>


  <!-- <style>
    *{
      /* font-family: 'Bree Serif', serif; */
    }
    h1,h2,h3,h4,h5,h6,span{
      font-family: 'Bebas Neue', cursive; /*Titulo*/
    }
    /* main {
      background: linear-gradient(223deg, rgb(109,5,141) 0%, rgb(91,49,147) 95%);
    } */
    .jumbotron {
      color: #FFF; 
      /* background: linear-gradient(223deg, rgb(109,5,141) 0%, rgb(91,49,147) 95%); */
      background-color: #6d078e;
    }
    span {
      background-color: #ff7f00;
      padding: 2px;
    }

    .btn{
      background-color: #6d078e;
      background: linear-gradient(223deg, rgb(109,5,141) 0%, rgb(91,49,147) 95%);
    }
    .card-img-top{
      width: 100px;
      
    }
    .text-center .img-responsive {
    margin: 0 auto;
    }
    .slogan{
      font-size: 5rem;
    }
    .card-text {
      color: #6d078e;
    }

    @media(max-width: 1024px){
      .imgnone  {
      display: none;
    }

    .slogan{
      font-size: 60px;
    }
  
   
}
@media(max-width: 600px){
      .imgnone  {
      display: none;
    }

    .slogan{
      width: 100%;
      font-size: 40px;
      text-align: center;
    }
  
   
}

  </style> -->

</head>

<body>

  <header>
    <!---------------------- MENU --->
    <?php include('./includes/menu.html') ?>

  </header>

  <main>

        <div class="jumbotron jumbotron-fluid text-sm-center" style="background: rgba(253, 253, 253, 0);">
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col">
                <h1 class="slogan">
                  <span class="m-auto" style="font-family: Bebas Neue; font-size: 40px; color:#00b9b3;"> Faltou medicamento na Unidade básica de saude (UBS)?
                </h1>
                <button class="btn btn-primary home-btn" type="button">notifique aqui a falta</button>
              </div>
              <div class="col"><img class="rounded float-right" width="250rem" src="./img/pill.svg" alt=""></div>
            </div>
          </div>
        </div>

    <!--  ANTIGO
      <div class="jumbotron jumbotron-fluid text-sm-center">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col">
            <h1 class="slogan lead"> <span class="m-auto"> NOTIFIQUE </span><br> A FALTA DE MEDICAMENTOS!</h1>
          </div>
          <div class="col imgnone"><img class="rounded float-right" width="" src="./img/med.png" alt=""></div>
        </div>
      </div>
    </div> 
  -->

    <!-- ANTIGO
       <section>
      <div class="container">
        <div class="row">
          
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img class="bd-placeholder-img card-img-top img-responsive mx-auto mt-3" src="./img/sirene.png" alt="Logo">
              <div class="card-body">
                <p class="card-text text-justify p-1">Acesse a ultimas notificações. O acesso à informação junto com o direito à saúde, são uns dos direitos fundamentais.</p>
                <div class="d-flex justify-content-center align-items-center">
                  <div class="btn-group shadow">
                    <a type="button" href="notification.php" class="btn btn-md text-white">Ver Notificações</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img class="bd-placeholder-img card-img-top img-responsive mx-auto mt-3" src="./img/megafone.png" alt="Logo">
              <div class="card-body">
                <p class="card-text text-justify p-1">Faça uma notificação da falta de algum dos medicamento que deveria ser fornecido pelo Sistema Único de Saúde.</p>
                <div class="d-flex justify-content-center align-items-center">
                  <div class="btn-group shadow">
                    <a type="button" href="register_notification.php" class="btn btn-md text-white">Notifique</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img class="bd-placeholder-img card-img-top img-responsive mx-auto mt-3" src="./img/logo_squad.png" alt="Logo">
              <div class="card-body">
                <p class="card-text text-justify p-1">Projeto desenvolvido no ano de 2020 pelos alunos e alunas do Squad 07 (SP1) da Recode Pro 2020.</p>
                <div class="d-flex justify-content-center align-items-center">
                  <div class="btn-group shadow">
                    <a type="button" href="contact.php" class="btn btn-md text-white">Fale conosco</a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section> 
  -->


  <style>
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


  </style>
  <section>
      <div class="container">
        <div class="row">
          

          <div class="col-md-4">
            <div class="card mb-4 home_card">
              <div class="card-body"
                  <h4 class="card-title" style="color: #ffffff;font-family: Bebas Neue;font-size: 30px;line-height: 30px;">Acesse as ultimas NOTIFICAções. </h4>
                 
                  <p class="card-text" 
                  style="color: #ffffff; font-family: Bebas Neue;font-size: 25px; margin-top: 10px;">
                    O acesso à informação junto com o direito à saúde, são uns dos direitos fundamentais.
                  </p>

                  <button class="btn btn-primary home-btn" type="button">ACESSAR</button>
              </div>
            </div>
          </div>


          <div class="col-md-4">
            <div class="card mb-4 home_card">
              <div class="card-body"
                  <h4 class="card-title" style="color: #ffffff;font-family: Bebas Neue;font-size: 30px;line-height: 30px;">Registre sua Notificação</h4>
                 
                  <p class="card-text" 
                  style="color:#ffffff; font-family: Bebas Neue;font-size: 25px; margin-top: 10px;">
                  Notifique da falta de algum dos medicamento que deveria ser fornecido pelo Sistema Único de Saúde.
                  </p>

                  <button class="btn btn-primary home-btn" type="button">ACESSAR</button>
              </div>
            </div>
          </div>


          <div class="col-md-4">
            <div class="card mb-4 home_card">
              <div class="card-body"
                  <h4 class="card-title" style="color: #ffffff;font-family: Bebas Neue;font-size: 30px;line-height: 30px;">Últimos 30 dias</h4>
                 
                  <p class="card-text" 
                  style="color: #ffffff; font-family: Bebas Neue;font-size: 25px; margin-top: 10px;">
                  Medicamento com mais notificações de faltas:
                  </p>
                  <p class="card-text" 
                  style="color:#ffffff; font-family: Bebas Neue;font-size: 25px; margin-top: 10px;">
                  </i>UBS com mais notificações de faltas:
                  </p>

                  <button class="btn btn-primary home-btn" type="button">ACESSAR</button>
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
