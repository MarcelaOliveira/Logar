import React, { useState, useEffect } from "react";
import Input from "../Forms/InputComponent";

export default function ModalEditar(props) {
  const [userEdit, setUserEdit] = useState({});
  const { nome, email, endereco, telefone, senha, confSenha } = props;

  const setInputs = (evento) => {
    const stat = { ...userEdit };
    stat[evento.target.name] = evento.target.value;
    setUserEdit(stat);
  };

  const onSave = (evente) => {
    evente.preventDefault();
    props.onSubmit(userEdit);
  };

  useEffect(() => {
    setUserEdit({ nome, email, endereco, telefone, senha, confSenha });
  }, [props]);

  return (
    <div id="EditarConta" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Editar usuário</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form className="form vertical-alignC" onSubmit={onSave}>
              <div className="form-group">
                <div className="mb-3">
                  <Input
                    label="Nome"
                    type="text"
                    className="form-control"
                    name="nome"
                    placeholder="Nome"
                    value={userEdit.nome}
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
                    value={userEdit.email}
                    onChange={setInputs}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    label="Endereeço"
                    className="form-control"
                    type="text"
                    name="endereco"
                    placeholder="Rua: Tal,1234"
                    value={userEdit.endereco}
                    onChange={setInputs}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    label="Telefone"
                    type="text"
                    className="form-control"
                    name="telefone"
                    placeholder="(DD)94834-4456"
                    value={userEdit.telefone}
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
                    value={userEdit.senha}
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
                    value={userEdit.confSenha}
                    onChange={setInputs}
                  />
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    value="Editar"
                    className="btn"
                    tabindex="1"
                  />
                </div>
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
