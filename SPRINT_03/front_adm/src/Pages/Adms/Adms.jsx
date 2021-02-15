import React from "react";

export default function Adms() {
  return (
    <div className="bg-transparent ">
      <main class="container">
        <section class="row">
          <div class="col mt-5">
            <div class="jumbotron card card-image text-white bg-transparent">
              <h1 class="display-4 text-light  font-weight-bold">ADM's</h1>
              <p class="lead font-weight-bold">Atuais ADM's do sistema SOS</p>

              <table class="table table-striped table-hover table-dark bg-dark text-center">
                <tbody>
                  {/* <?php
              $sql = "SELECT * FROM administrador";
              $result = $conn->query($sql);

              if ($result->num_rows > 0) {
                while ($rows = $result->fetch_assoc()) {
              ?> */}

                  <tr>
                    <th
                      class="align-middle text-center"
                      scope="row"
                      // style="width: 60px;"
                    >
                      <img
                        src="https://avatars.githubusercontent.com/u/65695476?s=460&u=3d179b94c652bc8e71ef89e160bad45e23d80422&v=4"
                        width="45"
                        height="45"
                        class="d-inline-block align-top rounded-circle"
                        // alt="{/*<?php echo $rows['nome'] ?>*/}"
                        loading="lazy"
                      />
                    </th>

                    <td class="align-middle text-left">
                      <details>
                        <summary class="font-weight-bold">
                          {/*<?php echo $rows["nome"]; ?>*/}
                        </summary>
                        <section>
                          <div>
                            <b>Username: </b>
                            {/* <?php echo $rows["username"]; ?> */}
                          </div>

                          <div>
                            <b>Email: </b>
                            {/* <?php echo $rows["email"]; ?> */}
                          </div>

                          <div>
                            <b>Membro desde: </b>
                            {/* <?php echo date('m/Y', strtotime($rows['adm_desde'])); ?> */}
                          </div>
                        </section>
                      </details>
                    </td>
                  </tr>

                  {/* <?php
                }
              } else {
                echo "Nenhum produto cadastrado!";
              }
              ?> */}
                </tbody>
              </table>
            </div>
          </div>

          <div class="col mt-5">
            <div class="jumbotron card card-image text-white bg-transparent">
              <h1 class="display-4 text-light  font-weight-bold">CADASTRAR</h1>
              <p class="lead font-weight-bold">
                Insira abaixo dados do novo ADM
              </p>

              <form
                action="cadastro_usuario.php"
                method="post"
                class="d-flex flex-column justify-content-center align-items-center "
              >
                <input
                  class="mb-3 form-control border border-light"
                  type="text"
                  name="nome"
                  placeholder="Digite o nome"
                />
                <input
                  class="mb-3 form-control border border-light"
                  type="text"
                  name="username"
                  placeholder="Digite um nome de usuário"
                />
                <input
                  class="mb-3 form-control border border-light"
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail"
                />
                <input
                  class="mb-3 form-control border border-light"
                  type="url"
                  name="imagem"
                  placeholder="URL do avatar (opcional)"
                />
                <input
                  class="mb-3 form-control border border-light"
                  type="password"
                  name="senha"
                  placeholder="Digite uma senha"
                />
                <input
                  class="mb-3 form-control border border-light"
                  type="password"
                  name="conf_senha"
                  placeholder="Confirme a senha"
                />
                <div class="d-flex justify-content-between btn-block">
                  <button class="btn btn-outline-light w-25" type="reset">
                    <b>Limpar</b>
                  </button>
                  <button class="btn btn-light w-25" type="submit">
                    <b>Cadastrar</b>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <div id="displayInfo" class="fixed-top container"></div>
    </div>
  );
}
