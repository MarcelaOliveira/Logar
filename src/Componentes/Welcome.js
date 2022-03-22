import React from "react";
import ModalEditar from "./ModalEditar";
import ModalDeletar from "./ModalDeletar";

function Welcome({ name, user, deslogar, onSubmit, onDeletar }) {
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
                      className="inverted blue edit outline icon"
                      data-toggle="modal"
                      data-target="#EditarConta"
                    ></i>
                    <i
                      className="inverted red trash icon"
                      data-toggle="modal"
                      data-target="#DeletarUser"
                    ></i>
                  </td>
                  <ModalEditar onSubmit={onSubmit} />
                  <ModalDeletar onDeletar={onDeletar} />
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
