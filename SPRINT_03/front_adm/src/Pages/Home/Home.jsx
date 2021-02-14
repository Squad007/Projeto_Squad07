import React from "react";
import './Home.css'

export default function Home() {
  return (
    <div >
      <main className="d-flex bg-dark">
        <section
          className="col d-flex justify-content-center align-items-center"
        //   style={{width: '50vh', height: '100vh'}}
        >
           <img
                className="my-1"
                src={require('../../Assets/img/logo.svg').default}
                width="80px"
              />
        </section>

        <section
          className="login col d-flex justify-content-center align-items-stretch"
        //   style="width: 50vh; height: 100vh;"
        >
          <form
            action=""
            method="post"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h3 className="mb-4 font-weight-bold text-white">
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
