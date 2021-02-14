import React from 'react';


export default function Medicamentos() {
    return (
        
        <>
            <div class="jumbotron card card-image text-white bg-dark">
            {/* style="background-color: rgba(0,0,0,0);" */}
                <p class="text-center">Bem vindo ao sistema SOS,  -</p>
                <h1 class="display-4 text-success  font-weight-bold">Medicamentos</h1>

                <button type="button" class="btn btn-success btn-lg font-weight-bold" data-toggle="modal" data-target="#cadastroMEDModal">
                CADASTRAR NOVO MEDICAMENTO
                </button>

                <hr class="my-4 bg-white" />
                <p class="lead font-weight-bold">Atualmente cadastrados:</p>
                <div class="table-responsive">
                <table class="table table-striped table-hover table-dark bg-dark text-center">
                <thead>
                    <tr>
                    <th scope="col" class=" text-left">ID</th>
                    <th scope="col" class=" text-left">NOME</th>
                    <th scope="col" class=" text-center">N°_DENÚNCIAS</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                       
                        <th class="align-middle text-left" scope="row "></th>
                        <td class="align-middle text-left">

                            <details>
                            <summary class="font-weight-bold"></summary>
                            <section>

                                <hr class="border border-white bg-white mx-0 my-2 p-0" />

                                <div>
                                <b class="text-success">Cadastrado por: </b>
                               
                                </div>

                                <div>
                                <b class="text-success">Cadastrado em: </b>
                                
                                </div>

                                <hr class="border border-white bg-white mx-0 my-2 p-0" />

                            </section>
                            </details>

                        </td>
                        <td class="align-middle text-center"></td>
                        <td class="align-middle text-right">
                            <div class="btn-group">

                            {/* <!-- Modal Atualizar medicamentos --> */}
                            <button class="btn btn-outline-info font-weight-bold" data-toggle="modal" data-target="#atualizarMEDModal">EDITAR</button>
                            <div class="modal fade text-dark" id="atualizarMEDModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            
                                <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">

                                    <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">ATUALIZAR MEDICAMENTO</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>

                                    <div class="modal-body">

                                    <form id="atualizarMED" class="container-fluid" action="#" method="post">
                                        <div class="row">
                                        <div class=" col-sm-5 form-group">
                                            <label class="col-form-label">CADASTRADO POR:</label>
                                            <select class="custom-select mr-sm-2 border border-primary" name="cadastrado_por_id">
                                            <option selected ></option>
                                            </select>
                                        </div>
                                        </div>

                                        <div class="form-group">
                                        <label class="col-form-label">ID:</label>
                                        <input type="text" name="id" class="form-control border border-primary" />
                                    
                                        </div>
                                        

                                        <div class="form-group">
                                        <label class="col-form-label">DESCRIÇÃO COMPLETA:</label>
                                        <textarea class="form-control border border-primary" name="nome" ></textarea>
                                        </div>

                                        <div class="form-group">
                                        <label class="col-form-label">Observações extras sobre o medicamento a ser cadastrado:</label>
                                        <textarea class="form-control border border-primary" name="observacao"></textarea>
                                        </div>

                                    </form>

                                    </div>

                                    <div class="modal-footer d-flex justify-content-between align-items-center">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">SAIR</button>

                                    <div class="d-flex">
                                        <input type="reset" class="btn btn-outline-warning mx-2" form="cadastrarMED" value="LIMPAR" />
                                        <input type="submit" class="btn btn-primary mx-2" form="atualizarMED"value="ATUALIZAR" />
                                    
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <form method="post">
                                <input type="hidden" name="id" />

                                <button type="submit" class="btn btn-outline-danger  font-weight-bold">
                                <input type="hidden" name="excluir" />
                                APAGAR </button>
                            </form>
                            
                            </div>
                        </td>
                        </tr>


                </tbody>
                </table>
                </div>

       
                </div>
                <div class="modal fade text-dark" id="cadastroMEDModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">

                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">CADASTRAR MEDICAMENTO</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>

                    <div class="modal-body">

                    <form id="cadastrarMED" class="container-fluid" action="#" method="post">
                        <div class="row">
                        <div class=" col-sm-5 form-group">
                            <label class="col-form-label">CADASTRADO POR:</label>
                            <select class="custom-select mr-sm-2 border border-primary" name="cadastrado_por_id">
                            <option selected></option>
                            </select>
                        </div>
                        </div>

                        <div class="form-group">
                        <label class="col-form-label">ID:</label>
                        <input type="text" name="id" class="form-control border border-primary" placeholder="Digite o ID oficial do medicamento" />
                        </div>

                        <div class="form-group">
                        <label class="col-form-label">DESCRIÇÃO COMPLETA:</label>
                        <textarea class="form-control border border-primary" name="nome" placeholder="Digite o nome completo do medicamento"></textarea>
                        </div>

                        <div class="form-group">
                        <label class="col-form-label">Observações extras sobre o medicamento a ser cadastrado:</label>
                        <textarea class="form-control border border-primary" name="observacao"></textarea>
                        </div>

                    </form>

                    </div>

                    <div class="modal-footer d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">SAIR</button>

                    <div class="d-flex">
                        <input type="reset" class="btn btn-outline-warning mx-2" form="cadastrarMED" value="LIMPAR" />
                        <input type="submit" class="btn btn-primary mx-2" form="cadastrarMED" value="CADASTRAR" />
                    </div>
                    </div>
                </div>
                </div>
            </div>

            </>
    )
{/* 
            <!-- Modal para cadastro de medicamento --> */}
          

      
    
}
