import React from "react";
import Input from "./Input";

const FormLogin = (props) => (
  <div>
    <div className="container d-flex justify-content-center">
      <div className="card mt-5 w-50">
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
                id="email"
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
                id="senha"
                name="senha"
                className="form-control"
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
    </div>
  </div>
);

export default FormLogin;
