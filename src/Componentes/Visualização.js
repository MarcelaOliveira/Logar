import React from "react";

export default function Visualização() {
  return (
    <div>
      <div className="container mt-5">
        <div className="my-3 px-5 py-5 bg-white rounded shadow-sm">
          <div className="col-12">
            <h1 className="text-center">Usuários cadastrados</h1>
          </div>
          <div className="table-responsive my-5">
            <table className="table">
              <thead></thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
