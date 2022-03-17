import React from "react";

export default function Visualização() {
  return (
    <div>
      <div class="container mt-5">
        <div class="my-3 px-5 py-5 bg-white rounded shadow-sm">
          <div class="col-12">
            <h1 class="text-center">Usuários cadastrados</h1>
          </div>
          <div class="table-responsive my-5">
            <table class="table">
              <thead>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Endereço</th>
                <th scope="col">Telefone</th>
              </thead>
              <tbody>
                <tr>
                  <th></th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
