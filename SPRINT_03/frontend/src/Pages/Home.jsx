import React from 'react';


export default function () {
    return (
        
        <div>  
            {/* style="min-height: 68vh" */}

        <div class="jumbotron jumbotron-fluid text-sm-center"> {/* style="background: rgba(253, 253, 253, 0);"*/}
          <div class="container">
            <div class="row">
              <div class="col"> {/* style="font-family:; color:#00b9b3; text-align: left;" */}
                <h1 > {/*style="line-height: 1.2; font-size: 50px;" */}
                 Faltou medicamento na Unidade básica de saude (UBS)?
                </h1>
                <p>
                  <a class="btn btn-primary" href="./register_notification.php"
                  type="button" > {/* style="background: #6f42c1; font-family: Bebas Neue;font-size: 25px; border: none;" */}
                  Notifique a falta <i class="fas fa-exclamation-circle"></i>
                  </a>
                </p>

              </div>
              <div class="col animate__animated animate__pulse animate__delay-1s">
                <img class="float-right" src="./img/pill.svg" alt="medicamento" /> {/*style="max-width:310px; min-width: 150px;"  */}

              </div>
            </div>
          </div>
        </div>

  <section>
      <div class="container">
        <div class="row">
          
          <div class="col-md-4 my-3">
            <div class="card mb-4 home_card h-100">
                <div class="card-body">
                  <h4 class="card-title" >ultimas NOTIFICAções </h4> {/*style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;" */}
                 
                  <p class="card-text" 
                 > {/* style="color: #ffffff;font-size: 20px; margin-top: 10px; */}
                  Veja as últimas notificações. O acesso à informação é um dos dos direitos fundamentais garantido na nossa Constituição.
                  </p>
                </div>
                <div class="card-footer">
                <a class="btn btn-primary home-btn" href="./notification.php" type="button">ACESSAR</a>
                </div>
            </div>
          </div>


          <div class="col-md-4 my-3">
            <div class="card mb-4 home_card h-100">
                <div class="card-body">
                    <h4 class="card-title" >Registre sua Notificação</h4> {/*style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;" */}
                  
                    <p class="card-text" 
                    > {/*style="color:#ffffff;font-size: 20px; margin-top: 10px;" */}
                    Notifique da falta de algum dos medicamento que deveria ser fornecido pelo Sistema Único de Saúde.
                    </p> 
                </div>
                <div class="card-footer">
                  <a class="btn btn-primary home-btn" href="./register_notification.php" type="button">Notificar</a>
                </div>
            </div>
          </div>


          <div class="col-md-4 my-3">
            <div class="card mb-4 home_card h-100">
                <div class="card-body">
                  <h4 class="card-title" >Sobre  Nós</h4> {/*style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;" */}
                 
                  <p class="card-text" 
                  > {/*style="color: #ffffff;font-size: 20px; margin-top: 10px;" */}
                  Somos o Squad 07 (SP1) da Recode Pro 2020. Estamos trabalhando para desenvolver ferramentas que ajude a comunidade.
                  </p>  
                </div>
                <div class="card-footer">
                  <a class="btn btn-primary home-btn"  href="./contact.php" type="button" >CONTATO</a>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>


  </div>
  
    )
}
