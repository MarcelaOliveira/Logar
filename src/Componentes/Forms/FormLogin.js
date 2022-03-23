import React, { useState } from "react";
import Input from "./Input";

export default function FormLogin(props) {
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
      <h1 className="text-center h1 mt-2 fw-normal">Login</h1>
      <div className="container d-flex justify-content-center">
        <div className="card mt-2 mb-2 w-50">
          <div className="card-body">
            <form onSubmit={onSave}>
              <div className="mb-3">
                <Input
                  label="Email"
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                  value={props.email}
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
                  value={props.senha}
                  onChange={setInputs}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="card">
          <div className="card-body">
            Já é cadastrado <button onClick={props.onClick}>Cadastre-se</button>
          </div>
        </div>
      </div>
    </div>
  );
}
