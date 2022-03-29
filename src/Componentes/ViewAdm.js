import React from "react";

export default function Visualização({ users, deslogar }) {
  return (
    <div>
      <div className="container mt-3">
        <div className="my-3 px-5 py-5 bg-white rounded shadow-sm">
          <div className="col-12">
            <h1 className="text-center">Usuários cadastrados</h1>
          </div>
          <div className="table-responsive my-5">
            <table className="table">
              <thead>
                <th scop="col">Nome</th>
                <th scop="col">Email</th>
                <th scop="col">Endereço</th>
                <th scop="col">Telefone</th>
              </thead>
              {users &&
                users.map((user) => (
                  <tbody>
                    <td>{user.nome}</td>
                    <td>{user.email}</td>
                    <td>{user.endereco}</td>
                    <td>{user.telefone}</td>
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
