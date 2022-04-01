import React, { useState } from "react";
import { Table, Row, Col, Button, Card } from "antd";
import "antd/dist/antd.css";

export default function ViwAdm({ users, deslogar }) {
  const [buttonState, setButtonState] = useState();
  let data = [];
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
      dataIndex: "endereco",
      key: "endereco",
    },
    {
      title: "Telefone",
      key: "telefone",
      dataIndex: "telefone",
    },
  ];

  // eslint-disable-next-line no-lone-blocks
  {
    users &&
      users.map((user) =>
        data.push({
          key: user.nome,
          nome: user.nome,
          email: user.email,
          endereco: user.endereco,
          telefone: user.telefone,
        })
      );
  }

  return (
    <div style={{ marginTop: 20 }}>
      <center>
        <Card
          type="inner"
          ustify="space-around"
          align="middle"
          style={{ marginTop: 80, width: 1200 }}
        >
          <div justify="space-around" align="middle">
            <h1 style={{ color: "#00ACEE" }}>Usuarios cadastrados</h1>
          </div>
          <Row justify="space-around" align="middle">
            <Col span={18}>
              <Table columns={columns} dataSource={data} pagination={false} />
            </Col>
          </Row>

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
        </Card>
      </center>
    </div>
  );
}
