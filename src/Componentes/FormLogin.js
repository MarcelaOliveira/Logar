import React from "react";
import Input from "./Input";

const FormLogin = (props) => (
  <div>
    <h1 className="text-center h1 mt-2 fw-normal">Login</h1>
    <div className="container d-flex justify-content-center">
      <div className="card mt-2 w-50">
        <div className="card-body">
          <form onSubmit={props.onSubmit}>
            <div className="mb-3">
              <Input
                label="Nome"
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                placeholder="Nome"
                value={props.nome}
                onChange={props.setInputs}
              />
            </div>
            <div className="mb-3">
              <Input
                label="Email"
                type="email"
                className="form-control"
                name="email"
                placeholder="name@example.com"
                value={props.email}
                onChange={props.setInputs}
              />
            </div>
            <div className="mb-3">
              <Input
                label="Senha"
                type="password"
                className="form-control"
                name="senha"
                placeholder="Senha"
                value={props.senha}
                onChange={props.setInputs}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </form>
        </div>
      </div>
      <br />
    </div>
  </div>
);

export default FormLogin;
