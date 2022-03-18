import React from "react";

export default function Visualização({ users, deslogar }) {
  return (
    <div>
      <div className="container mt-5">
        <div className="my-3 px-5 py-5 bg-white rounded shadow-sm">
          <div className="col-12">
            <h1 className="text-center">Usuários cadastrados</h1>
          </div>
          <div className="table-responsive my-5">
            <table className="table">
              <thead>
                <td scop="col">Nome</td>
                <td scop="col">Email</td>
                <td scop="col">Endereço</td>
                <td scop="col">Telefone</td>
              </thead>
              {users &&
                users.map((user) => (
                  <tbody>
                    <th>{user.nome}</th>
                    <th>{user.email}</th>
                    <th>{user.endereco}</th>
                    <th>{user.telefone}</th>
                  </tbody>
                ))}
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
