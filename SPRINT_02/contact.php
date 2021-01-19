<?php

  include("connection.php");

if (isset($_POST['nome']) && isset($_POST['msg']) && isset($_POST['email'])) {
  $nome = $_POST['nome'];
  $msg = $_POST['msg'];
  $email = $_POST['email'];

  $sql = "insert  into fale_conosco (nome, msg, email) values ('$nome','$msg','$email')";
  $result = $conn->query($sql);
}

?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fale conosco</title>

  <?php include('./ADM/bootstrap.html') ?>

</head>

<body>
  <header>
    <!----------------------------- MENU --->
    <?php include('./includes/menu.html') ?>
  </header>

  <main style="min-height: 67vh">
    <!-------------------------------------- Formulario para Enviar Mensagem ------------------------->
    <div class="container my-3 p-3 bg-light rounded shadow-lg" id="demo-form">
      <form class="container" method="POST" action="contact.php">
        <div class="form-group">
          <h1 class="my-4">Enviar Mensagem</h1>
          <label for="nome">Nome</label>
          <input class="form-control mb-2" type="text" name="nome" placeholder="Digite seu Nome">

          <label for="nome">E-mail(opcional)</label>
          <input class="form-control mb-2" type="email" name="email" placeholder="Digite seu E-mail">
          
          <label for="nome">Mensagem</label>
          <textarea class="form-control mb-2" name="msg" placeholder="Digite uma mensagem"></textarea>

          <button type="button" class="btn home-btn"
          data-toggle="modal"  
          data-target="#modalconfirma">Enviar</button>

          <!-------------------------------------- Modal de confirmação para mensagem ------------------->
          <div class="container">
            <div class="modal" id="modalconfirma" tabindex="-1" role="dialog">
              <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">Confirma</h4>
                    <button type="button" class="closer" data-dismiss="modal">
                      <span> &times; </span>
                    </button>

                  </div>
                  <div class="modal-body" >
                    <p>Confirmar o envio da mensagem?</p>
                  </div>
                  <div class="modal-footer">
                    <button type="submit" name="submit" class="btn btn-success">Ok</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>

  </main>
</body>
    <!------------------------------- Rodape -->
    <?php include('./includes/rodape.html') ?>

</html>
