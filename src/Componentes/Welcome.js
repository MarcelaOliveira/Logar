import React from "react";
import Input from "./Input";

function Welcome({
  nome,
  email,
  endereco,
  telefone,
  senha,
  confSenha,
  name,
  user,
  setInputs,
  deslogar,
  onEditar,
}) {
  return (
    <div>
      <div className="container my-2 d-flex justify-content-center">
        <h2>Welcome, {name}!</h2>
      </div>
      <div className="container mt-3">
        <div className="my-1 px-5 bg-white rounded shadow-sm">
          <div className="col-12">
            <h2 className="text-center">Seus dados</h2>
          </div>
          <div className="table-responsive my-3">
            <table className="table" id="tableUser">
              <thead>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Endereço</th>
                <th scope="col">Telefone</th>
                <th scope="col">Ações</th>
              </thead>
              {user && (
                <tbody>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.endereco}</td>
                  <td>{user.telefone}</td>
                  <td>
                    <i
                      class="inverted blue edit outline icon"
                      data-toggle="modal"
                      data-target="#EditarConta"
                    >
                      <a href=""></a>
                    </i>
                    <i
                      class="inverted red trash icon"
                      data-toggle="modal"
                      data-target="#DeletarUser"
                    >
                      <a></a>
                    </i>
                  </td>
                  <div id="EditarConta" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">Editar Fusuário</h4>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                        </div>
                        <div className="modal-body">
                          <form className="form vertical-alignC">
                            <Input
                              type="hidden"
                              name="email"
                              value={user.email}
                            />
                            <div className="form-group">
                              <div className="mb-3">
                                <Input
                                  label="Nome"
                                  type="text"
                                  className="form-control"
                                  name="nome"
                                  placeholder="Nome"
                                  value={nome}
                                  onChange={setInputs}
                                />
                              </div>
                              <div className="mb-3">
                                <Input
                                  label="Email"
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  placeholder="name@example.com"
                                  value={email}
                                  onChange={setInputs}
                                />
                              </div>
                              <div className="mb-3">
                                <Input
                                  label="Endereeço"
                                  className="form-control"
                                  name="endereco"
                                  placeholder="Rua: Tal,1234"
                                  value={endereco}
                                  onChange={setInputs}
                                />
                              </div>
                              <div className="mb-3">
                                <Input
                                  label="Telefone"
                                  className="form-control"
                                  name="telefone"
                                  placeholder="(DD)94834-4456"
                                  value={telefone}
                                  onChange={setInputs}
                                />
                              </div>
                              <div className="mb-3">
                                <Input
                                  label="Senha"
                                  type="password"
                                  className="form-control"
                                  name="senha"
                                  placeholder="Senha"
                                  value={senha}
                                  onChange={setInputs}
                                />
                              </div>
                              <div className="mb-3">
                                <Input
                                  label="Confirmar Senha"
                                  type="password"
                                  className="form-control"
                                  name="confSenha"
                                  placeholder="Confirmar Senha"
                                  value={confSenha}
                                  onChange={setInputs}
                                />
                              </div>
                              <div class="modal-footer">
                                <input
                                  type="submit"
                                  value="Editar"
                                  className="btn"
                                  tabindex="1"
                                  onClick={onEditar}
                                />
                              </div>
                              <br />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="card">
          <div className="card-body">
            Deseja sair? <button onClick={deslogar}>Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
