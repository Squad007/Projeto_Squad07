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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="./js/scripts.js"></script>
  <title>Fale conosco</title>
  

  <?php include('./ADM/bootstrap.html') ?>

</head>

<body>
  <!--------------------- MENU ---------------------------->
  <?php include('./includes/menu.html') ?>

  <main style="min-height: 67vh">

    <div class="container my-3 p-3 bg-light rounded shadow-lg">
    <h1 class="my-4">Enviar Mensagem</h1>
      <!------------------------------ Formulario de msg --------------------------->
      <form class="form-group" method="post" action="">
        <h4 class="mt-5 purple">Nome </h4>
        <input class="form-control mb-2" type="text" name="nome" placeholder="Digite seu Nome">
        <h4 class="mt-5 purple">E-mail (opcional) </h4>
        <input class="form-control mb-2" type="email" name="email" placeholder="Digite seu e-mail">
        <h4 class="mt-5 purple">Mensagem </h4>
        <textarea class="form-control mb-2" name="msg" placeholder="Digite uma mensagem"></textarea>
        <br /><br />
        <input class="btn btn-primary home-btn form-control" id="button" type="submit" name="submit" value="Enviar">
      </form>    
    </div>
  </main>
      <!------------------------------- Rodape -->
      <?php include('./includes/rodape.html') ?>
  
</body>

</html>
