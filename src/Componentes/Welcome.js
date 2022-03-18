import React from "react";

function Welcome(props) {
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <h1>Welcome, {props.nome}!</h1>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="card">
          <div className="card-body">
            Deseja sair? <button onClick={props.deslogar}>Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
