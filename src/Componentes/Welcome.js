import React, { useState } from "react";
import ModalEditar from "./Modals/ModalEditar";
import ModalDeletar from "./Modals/ModalDeletar";
import { Table, Tag, Space, Button, Card } from "antd";
import "antd/dist/antd.css";

function Welcome({ user, deslogar, onSubmit, onDeletar }) {
  const [buttonState, setButtonState] = useState();
  const handleSizeChange = (e) => {
    setButtonState({ size: e.target.value });
  };
  const size = buttonState;

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Endereço",
      dataIndex: "endereço",
      key: "endereço",
    },
    {
      title: "Telefone",
      key: "telefone",
      dataIndex: "telefone",
    },
    {
      title: "Ações",
      key: "ações",
    },
  ];

  const data = [
    {
      key: "1",
      nome: { nome: user.nome },
      email: { email: user.email },
      endereço: { endereço: user.endereço },
      telefone: { telefone: user.telefone },
    },
  ];

  return (
    <div className="gutter-row" justify="space-around" align="middle" span={8}>
      <Table columns={columns} dataSource={data} />
      <center>
        <Card
          type="inner"
          style={{ marginTop: 20, width: 200 }}
          justify="space-around"
          align="middle"
        >
          Deseja sair?
          <Button type="link" size={size} onClick={deslogar}>
            Sair
          </Button>
        </Card>
      </center>
    </div>
  );
}

export default Welcome;
