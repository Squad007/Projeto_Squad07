<?php  
      //export.php  
 if(isset($_POST["export"]))  
 {  
      $connect = mysqli_connect("localhost", "root", "", "sosmedicamentos");  
      header('Content-Type: text/csv; charset=utf-8');  
      header('Content-Disposition: attachment; filename=data_sosmedicamentos.csv');  
      $output = fopen("php://output", "w");  
      fputcsv($output, array('Registro da Notificação', 'Data da Falta', 'Nome da UBS', 'Medicamento em Falta',));  
      $query = "SELECT data_ocorrencia, data_denuncia, nomeUbs, nome FROM denuncia INNER JOIN ubs ON denuncia.ubs_id = ubs.id INNER JOIN medicamento ON denuncia.medicamento_id = medicamento.id GROUP BY denuncia.id DESC;";  
      $result = mysqli_query($connect, $query);  
      while($row = mysqli_fetch_assoc($result))  
      {  
           fputcsv($output, $row);  
      }  
      fclose($output);  
 }  
 ?>