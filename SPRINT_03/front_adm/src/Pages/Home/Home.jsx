import React, { useState } from "react";

import './Home.css'

export default function Home() {
  const [login, setLogin] = useState({
    username: "",
    senha: ""
  });

  const onChangeInput = (e) =>
    setLogin({...login, [e.target.name]: e.target.value});

  const sendLogin = async (e) => {
    e.preventDefault();
    console.log(login);
    // try {
    //   const res = await fetch("http://localhost:3001/", {
    //     method: "POST",
    //     body: JSON.stringify(formData),
    //     headers: { "Content-Type": "application/json" },
    //   })
    // } catch (err) {
    //   alert("error: senha incorreta")
    // }
  }

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
            onSubmit={sendLogin}
            id="formLogin"
            name="formLogin"
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
              value={login.username}
              onChange={onChangeInput}
              placeholder="Digite o seu username"
            />
            <input
              className="mb-3 form-control border border-white"
              type="password"
              name="senha"
              value={login.senha}
              onChange={onChangeInput}
              placeholder="Digite a sua senha"
            />
            <button className="btn btn-outline-light btn-block" type="submit" form="formLogin">
              <b>Entrar</b>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
