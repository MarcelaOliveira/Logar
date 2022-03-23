import React, { useState } from "react";
import Input from "./Input";

export default function FormCadastro(props) {
  const { nome, email, endereco, telefone, senha, confSenha, onClick } = props;
  const [values, setValues] = useState([]);
  const setInputs = (evento) => {
    const stat = { ...values };
    stat[evento.target.name] = evento.target.value;
    setValues(stat);
  };

  const onSave = (evente) => {
    evente.preventDefault();
    props.onSubmit(values);
  };

  return (
    <div>
      <h1 className="text-center h1 mt-2 fw-normal">Register</h1>
      <div className="container d-flex justify-content-center">
        <div className="card mb-2 w-50">
          <div className="card-body">
            <form onSubmit={onSave}>
              <div className="mb-3">
                <Input
                  label="Nome"
                  type="text"
                  className="form-control"
                  name="nome"
                  placeholder="Nome"
                  value={nome}
                  onChange={setInputs}
                />
              </div>
              <div className="mb-3">
                <Input
                  label="Email"
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={setInputs}
                />
              </div>
              <div className="mb-3">
                <Input
                  label="Endereeço"
                  className="form-control"
                  name="endereco"
                  placeholder="Rua: Tal,1234"
                  value={endereco}
                  onChange={setInputs}
                />
              </div>
              <div className="mb-3">
                <Input
                  label="Telefone"
                  className="form-control"
                  name="telefone"
                  placeholder="(DD)94834-4456"
                  value={telefone}
                  onChange={setInputs}
                />
              </div>
              <div className="mb-3">
                <Input
                  label="Senha"
                  type="password"
                  className="form-control"
                  name="senha"
                  placeholder="Senha"
                  value={senha}
                  onChange={setInputs}
                />
              </div>
              <div className="mb-3">
                <Input
                  label="Confirmar Senha"
                  type="password"
                  className="form-control"
                  name="confSenha"
                  placeholder="Confirmar Senha"
                  value={confSenha}
                  onChange={setInputs}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="card">
          <div className="card-body">
            Já é cadastrado <button onClick={onClick}>Logar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
