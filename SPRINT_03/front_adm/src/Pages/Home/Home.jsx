import React from "react";


export default function Home() {
  return (
    <div>
      <main className="d-flex">
        <section
          className="col d-flex justify-content-center align-items-center"
        //   style={{width: '50vh', height: '100vh'}}
        >
          <div
            className="logo"
            // style="background-image: url(./img/logo.svg); width: 60%; height: 80vh; background-position: center; background-size:contain; background-repeat:no-repeat"
          ></div>
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
