<?php
session_start();
require_once('connectdb.php');


$id = $_POST['id'];
$nome = $_POST['nome'];
$observacao = $_POST['observacao'];
$cadastrado_por_id = $_POST['cadastrado_por_id'];



$sql = "UPDATE medicamento SET cadastrado_por_id='$cadastrado_por_id', nome='$nome', observacao='$observacao' WHERE id=$id;";

if ($conn->query($sql) === TRUE) {
  echo "<script>
  alert('Medicamento atualizado!')
  window.location.href = 'pagmed.php'
  </script>
  ";
} else {
  echo "Error updating record: " . $conn->error;
}
