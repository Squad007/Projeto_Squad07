<?php
session_start();
require_once('connectdb.php');


$id = $_POST['id'];
$cadastrado_por_id = strtoupper($_POST['cadastrado_por_id']);
$nome = strtoupper($_POST['nome']);
$descricao = $_POST['descricao'];
$endereco = strtoupper($_POST['endereco']);
$bairro = strtoupper($_POST['bairro']);
$distrito = strtoupper($_POST['distrito']);
$zona = strtoupper($_POST['zona']);
$cidade = strtoupper($_POST['cidade']);
$uf = strtoupper($_POST['uf']);
$cep = strtoupper($_POST['cep']);
$telefone = strtoupper($_POST['telefone']);
$latitude = strtoupper($_POST['latitude']);
$longitude = strtoupper($_POST['longitude']);



$sql = "UPDATE ubs SET cadastrado_por_id='$cadastrado_por_id', nomeUbs='$nome', descricao='$descricao', endereco='$endereco', bairro='$bairro', distrito='$distrito', zona='$zona', cidade='$cidade', uf='$uf', cep='$cep', telefone='$telefone', latitude='$latitude', longitude='$longitude' WHERE id=$id;";

if ($conn->query($sql) === TRUE) {
  echo "<script>
  alert('Cadastro atualizado!')
  window.location.href = 'pagubs.php'
  </script>
  ";
} else {
  echo "Error updating record: " . $conn->error;
}
