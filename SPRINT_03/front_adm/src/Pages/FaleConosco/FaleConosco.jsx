import React, { useState, useEffect } from "react";

import "./msg.css";

export default function FaleConosco() {
  const [faleConosco, setFaleConosco] = useState([]);


// ------------------------------ Delete
async   function delForm (e) {
  // e.preventDefault();
  let id = e
   try {
    const res = await fetch(`http://localhost:3001/msg/${id}`, {
      method: "delete",
    });
    console.log(res)
  } catch (err) {
    alert("Erro: mensagem não cadastrada, tente mais tarde!");
  }
};

  //api adms-----------------
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:3001/msg");
      setFaleConosco(await response.json());
    }
    fetchMyAPI();
  }, [faleConosco]);

  return (
    <div>
      <div class="MSG jumbotron card card-image  bg-transparent  text-white">
        <p class="text-center">
          Bem vindo ao sistema SOS, <b>{/*<?php echo $_SESSION['nome'] ?>*/}</b>
          ! - {/*(<?php echo $_SESSION['email'] ?>)*/}
        </p>
        <h1 class="display-4 text-primary  font-weight-bold">Mensagens</h1>
        <hr class="my-4 bg-white" />
        <p class="lead font-weight-bold">Mensagens recentes:</p>
        <div class="table-responsive">
          <table class="table table-striped table-hover table-dark bg-dark text-center">
            <thead>
              <tr>
                <th scope="col" class=" text-center">
                  DATA/HORA
                </th>
                <th scope="col" class=" text-left">
                  NOME/MENSAGEM
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <?php
        $sql = "
            SELECT * FROM fale_conosco ORDER BY fale_conosco.data DESC;
        ";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
          while ($rows = $result->fetch_assoc()) {
        ?> */}

              {faleConosco.map((falecon) => (
                <tr>
                  <th
                    class="align-middle text-center text-primary"
                    scope="row "
                  >
                    {/* <?php echo date('d/m/Y', strtotime($rows['data'])); ?> */}
                    {/* <?php echo date('h:i A', strtotime($rows['data'])); ?> */}
                    {falecon.data}
                  </th>
                  <td class="align-middle text-left">
                    <b class="text-primary">
                      {/*<?php echo $rows["nome"]; ?>*/}:{falecon.nome}
                    </b>
                    {/* <?php echo $rows["msg"]; ?> */}
                    {falecon.msg}
                  </td>
                  <td class="align-middle text-right">
                    <div class="btn-group">
                     
                        <button
                          type="button"
                          class="btn btn-outline-danger  font-weight-bold"
                          onClick={() => delForm(falecon.id)}
                        >
                          
                          APAGAR{" "}
                        </button>
                      
                    </div>
                  </td>
                </tr>
              ))}

              {/* <?php
          }
        } else {
          echo "Nenhuma mensagem recebida!";
        }
        ?> */}
            </tbody>
          </table>
        </div>
        <div class="btn-group pagination justify-content-center">
          <a class="btn btn-outline-light disabled" href="#">
            ANTERIOR
          </a>
          <a class="btn btn-outline-light active" href="#">
            1
          </a>
          <a class="btn btn-outline-light" href="#">
            2
          </a>
          <a class="btn btn-outline-light" href="#">
            3
          </a>
          <a class="btn btn-outline-light" href="#">
            PRÓXIMO
          </a>
        </div>
      </div>

      {/* <!-- DIV para hovering alerts --> */}
      <div id="displayAlerts" class="fixed-top container"></div>

      {/* <script>
    function showInfo() {
      console.log('Clicou no botao!!!');
      displayAlerts.innerHTML += `
      <div class="alert alert-primary alert-dismissible fade show m-4" role="alert">
      <button class="close" data-dismiss="alert">&times;</button>
      <h4 class="alert-heading">Botao clicado com sucesso!</h4>
      <p>Este botao pertence a uma mensagem.</p>
      <hr>
      <p class="mb-0">Esta caixa está em fase de testes para futura implantação.</p>
      </div>
      `
    }
  </script> */}

      {/* <?php
if (isset($_POST['excluir'])) {
  $id1 = $_POST['id'];
  $sql2     = "delete from fale_conosco where id='$id1'";
  $qry2     = mysqli_query($conn, $sql2);

  echo "<script>
  alert('MSG Excluida! Agradeca os bolsominions que votaram nele!')
  window.location.href = 'pagmsg.php'
  </script>
  ";
} ?> */}
    </div>
  );
}
