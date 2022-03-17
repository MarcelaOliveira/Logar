import React from "react";
import Input from "./Input";

const FormCadastro = (props) => (
  <div>
    <h1 className="text-center h1 mt-2 fw-normal">Register</h1>
    <div className="container d-flex justify-content-center">
      <div className="card mt-2 mb-4 w-50">
        <div className="card-body">
          <br />
          <form onSubmit={props.onSubmit}>
            <div className="mb-3">
              <Input
                label="Nome"
                type="text"
                className="form-control"
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
                label="Endereeço"
                className="form-control"
                name="endereco"
                placeholder="Rua: Tal,1234"
                value={props.endereco}
                onChange={props.setInputs}
              />
            </div>
            <div className="mb-3">
              <Input
                label="Telefone"
                className="form-control"
                name="telefone"
                placeholder="(DD)94834-4456"
                value={props.telefone}
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
            <div className="mb-3">
              <Input
                label="Senha"
                type="password"
                className="form-control"
                name="confSenha"
                placeholder="Confirmar Senha"
                value={props.confSenha}
                onChange={props.setInputs}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default FormCadastro;
