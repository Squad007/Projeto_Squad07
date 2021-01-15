
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Relatórios</title>
  <?php include('./ADM/bootstrap.html') ?>
</head>

<body>
  <?php include('./includes/menu.html') ?>
  <main style="height: 37vw;">

    <div class="container my-3 p-3 bg-light rounded shadow-lg">
    <h1 class="my-4">Relatórios</h1>


    <form method="post" action="export.php" align="center">  
    <input type="submit" name="export" value="Exportar em CSV" class="btn btn-success"/>  
    </form>  

   
    </div>

    <!------- Rodape -->
  <?php include('./includes/rodape.html') ?>
  </main>
</body>

</html>