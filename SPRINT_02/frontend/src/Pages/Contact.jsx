import React from 'react'

export default function Report() {
    return (
        <main >
            <h1>Fale Conosco</h1>
        <div className="container my-3 p-3 bg-light rounded shadow-lg">
          {/* <!------------------------------ Formulario de msg ---------------------------> */}
          <form className="form-group" method="post" action="">
            <h4 className="mt-5 torange">Nome </h4>
            <input className="form-control mb-2" type="text" name="nome" placeholder="Digite seu Nome"/>
            <h4 className="mt-5 torange">Mensagem </h4>
            <textarea className="form-control mb-2" name="msg" placeholder="Digite uma mensagem"></textarea>
            <br /><br />
            <input className="btn btn-primary form-control" id="button" type="submit" name="submit" value="Enviar"/>
          </form>
    
          {/* <!--- Função para evitar o reenvio da msg ao atualizar a pagina --> */}
         
        </div>
        </main>
    )
}
