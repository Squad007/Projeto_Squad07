import React, { useState, useEffect } from "react";
import './not.css'

export default function Notificacaos() {
  const [notific, setNotific] = useState([]);


  // ------------------------------ Delete
  async   function delForm (e) {
    // e.preventDefault();
    let id = e
     try {
      const res = await fetch(`http://localhost:3001/den/${id}`, {
        method: "delete",
      });
      console.log(res)
    } catch (err) {
      alert("Erro: mensagem não cadastrada, tente mais tarde!");
    }
  };
  
  // ----------------------------- Api notificações
  useEffect (() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:3001/den/forADM");
      setNotific(await response.json());
    }
    fetchMyAPI();
  }, [notific]);

  return (
    <div>
      <div className="NOT jumbotron card card-image bg-transparent  text-white">
        <p className="text-center">
          Bem vindo ao sistema SOS, <b>{/*<?php echo $_SESSION['nome'] ?>*/}</b>
          ! - {/*(<?php echo $_SESSION['email'] ?>)*/}
        </p>
        <h1 className="display-4 text-danger  font-weight-bold">
          Notificações
        </h1>
        <hr className="my-4 bg-white" />
        <p className="lead font-weight-bold">
          Notificações presentes no sistema:
        </p>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-dark bg-dark text-center">
            <thead>
              <tr>
                <th scope="col" className=" text-left">
                  ID
                </th>
                <th scope="col" className=" text-left">
                  UBS/MEDICAMENTO
                </th>
                <th scope="col" className=" text-center">
                  DATA
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <?php
        $sql = "
          SELECT
          den.id id,
          den.comentario com,
          ubs.nomeUbs ubs,
          med.nome med,
          med.id id_med,
          den.data_ocorrencia data
          FROM
          denuncia den
          JOIN ubs ON den.ubs_id = ubs.id
          JOIN medicamento med ON den.medicamento_id = med.id
          ORDER BY den.data_ocorrencia DESC;
        ";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
          while ($rows = $result->fetch_assoc()) {
        ?> */}

            {notific.map((not) => (
              <tr>
                <th className="align-middle text-left" scope="row ">
                  {/*<?php echo $rows["id"]; ?>*/}
                  {not.id}
                </th>
                <td className="align-middle text-left ">
                  <details>
                    <summary>
                      <b>
                        {/*<?php echo $rows["ubs"]; ?>*/}
                        {not.ubs}
                        :{" "}

                        <span className="text-danger">FALTANDO</span>{" "}
                        {/*<?php echo $rows["id_med"]; ?>*/}
                        {not.id_med}
                      </b>
                      {/* <?php echo $rows["med"]; ?> */}
                      {not.med}
                    </summary>

                    <section>
                      <hr className="border border-white bg-white mx-0 my-2 p-0" />

                      <div>
                        <b className="text-danger">OBS. DO PACIENTE: </b>
                        {/* "<?php echo $rows["com"]; ?>" */}
                        {not.com}
                      </div>

                      {/* <hr className="border border-white bg-white mx-0 my-2 p-0" /> */}
                    </section>
                  </details>
                </td>
                <td className="align-middle text-center">
                  {/*<?php echo date('d/m/Y', strtotime($rows['data'])); ?>*/}
                  {not.data}
                </td>
                <td className="align-middle text-right">
                  <div className="btn-group">
                    
                        <button
                        type="hidden"
                        name="id"
                        value={not.id}
                        
                      />

                      <button
                        type="submit"
                        className="btn btn-outline-danger font-weight-bold"
                        form="formDelete"
                        onClick={()=> delForm(not.id)}
                      >
                       
                        APAGAR
                      </button>
                   
                  </div>
                </td>
              </tr>
            ))}
              
              {/* <?php
          }
        } else {
          echo "Nenhuma denúncia cadastrada!";
        }
        ?> */}
            </tbody>
          </table>
        </div>

        <div className="btn-group pagination justify-content-center">
          <a className="btn btn-outline-light disabled" href="#">
            ANTERIOR
          </a>
          <a className="btn btn-outline-light active" href="#">
            1
          </a>
          <a className="btn btn-outline-light" href="#">
            2
          </a>
          <a className="btn btn-outline-light" href="#">
            3
          </a>
          <a className="btn btn-outline-light" href="#">
            PRÓXIMO
          </a>
        </div>
      </div>

      {/* <!-- DIV para hovering alerts --> */}
      <div id="displayAlerts" className="fixed-top container"></div>

      {/* <script>
    function showInfo() {
      console.log('Clicou no botao!!!');
      displayAlerts.innerHTML += `
      <div className="alert alert-danger alert-dismissible fade show m-4" role="alert">
      <button className="close" data-dismiss="alert">&times;</button>
      <h4 className="alert-heading">Botao clicado com sucesso!</h4>
      <p>Este botao pertence a denuncia.</p>
      <hr>
      <p className="mb-0">Esta caixa está em fase de testes para futura implantação.</p>
      </div>
      `
    }
  </script> */}

      {/* <?php include("footer.html")?> */}

      {/* <?php
if (isset($_POST['excluir'])) {
  $id1 = $_POST['id'];
  $sql2     = "delete from denuncia where id='$id1'";
  $qry2     = mysqli_query($conn, $sql2);

  echo "<script>
  alert('Notificação Excluida! Agradeca os bolsominions que votaram nele!')
  window.location.href = 'pagnot.php'
  </script>
  ";
} ?> */}
    </div>
  );
}
