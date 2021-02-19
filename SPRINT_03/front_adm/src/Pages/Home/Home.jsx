import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCredentials } from '../../redux/actions';

import './Home.css';

export default function Home() {
  const [login, setLogin] = useState({
    username: '',
    senha: '',
  });

  const dispatch = useDispatch();
  const credentials = useSelector((state) => state.credentials);

  const handleChange = ({ target }) =>
    setLogin({ ...login, [target.name]: target.value });

  const sendLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/adm/login', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: { 'Content-Type': 'application/json' },
      });
      // setCredentials(await res.json());
      dispatch(changeCredentials(await res.json()));
      // console.log(credentials);
      // dispatch(changeCredentials(credentials));
    } catch (err) {
      alert('Erro ao comunicar com servidor! Tente mais tarde!');
    }
  };

  return (
    <div className="Login w-100">
      <main className="d-flex bg-transparent h-100 row">
        <section className="col-lg col-md col-sm col-xs d-flex justify-content-center align-items-center">
          <img
            className="imgLogin my-1"
            src={require('../../Assets/img/logo.svg').default}
          />
        </section>

        <section className="formlogin col-lg col-md col-sm col-xs d-flex justify-content-center align-items-stretch mx-3">
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
              id="username"
              name="username"
              onChange={handleChange}
              placeholder="Digite o seu username"
            />
            <input
              className="mb-3 form-control border border-white"
              type="password"
              id="senha"
              name="senha"
              onChange={handleChange}
              placeholder="Digite a sua senha"
            />
            <button
              className="btn btn-outline-light btn-block"
              type="submit"
              form="formLogin"
            >
              <b>Entrar</b>
            </button>
            {credentials.msg && (
              <p className="my-4 w-75 text-white text-center">
                {credentials.msg}
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}
