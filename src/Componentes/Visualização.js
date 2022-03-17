import React from "react";

export default function Visualização() {
  return (
    <div>
      <div class="container mt-5">
        <div class="my-3 px-5 py-5 bg-white rounded shadow-sm">
          <div class="row">
            <div class="col-lg-6 col-12">
              <h1 class="text-left">Funcionários</h1>
            </div>
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
