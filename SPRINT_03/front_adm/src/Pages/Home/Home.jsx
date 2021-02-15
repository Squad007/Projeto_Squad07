import React from "react";

import './Home.css'

export default function Home() {
  return (
    <div className="Login w-100">
      <main className="d-flex bg-transparent h-100 row">

        <section
          className="col-lg col-md col-sm col-xs d-flex justify-content-center align-items-center"
        >
           <img
                className="imgLogin my-1"
                src={require('../../Assets/img/logo.svg').default}
              />
        </section>

        <section
          className="formlogin col-lg col-md col-sm col-xs d-flex justify-content-center align-items-stretch mx-3"
        >
          <form
            action=""
            method="post"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h3 className="areaADM mb-4 font-weight-bold text-white">
              ÁREA DO ADMINISTRADOR
            </h3>

            <input
              className="mb-3 form-control border border-white"
              type="text"
              name="username"
              placeholder="Digite o seu username"
            />
            <input
              className="mb-3 form-control border border-white"
              type="password"
              name="senha"
              placeholder="Digite a sua senha"
            />
            <button className="btn btn-outline-light btn-block" type="submit">
              <b>Entrar</b>
            </button>
          </form>
        </section>
      
      </main>
    </div>
  );
}
