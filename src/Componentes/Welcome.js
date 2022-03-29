import React, { useState } from "react";
import ModalEditar from "./Modals/ModalEditar";
import ModalDeletar from "./Modals/ModalDeletar";
import { Table, Row, Col, Button, Card } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function Welcome({ user, deslogar, onSubmit, onDeletar }) {
  const [buttonState, setButtonState] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDeleteVisible, setIsModalDleteVisible] = useState(false);

  const handleSizeChange = (e) => {
    setButtonState({ size: e.target.value });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModalDelete = () => {
    setIsModalDleteVisible(true);
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
    {
      title: "Editar",
      key: "editar",
      dataIndex: "editar",
      render: (text) => (
        <a onClick={showModal}>
          <FormOutlined />
        </a>
      ),
    },
    {
      title: "Deletar",
      key: "deletar",
      dataIndex: "deletar",
      render: (text) => (
        <a style={{ color: "red" }} onClick={showModalDelete}>
          <DeleteOutlined />
        </a>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      nome: user.nome,
      email: user.email,
      endereco: user.endereco,
      telefone: user.telefone,
    },
  ];

  return (
    <div style={{ marginTop: 20 }}>
      <div justify="space-around" align="middle">
        <h1 style={{ color: "#00ACEE" }}>Welcome, {user.nome}</h1>
      </div>
      <Row justify="space-around" align="middle">
        <Col span={18}>
          <Table columns={columns} dataSource={data} />
          <ModalEditar
            {...user}
            onSubmit={onSubmit}
            isModalVisible={isModalVisible}
            handleCancel={handleCancel}
          />
          <ModalDeletar
            isModalDeleteVisible={isModalDeleteVisible}
            onSubmit={onDeletar}
            handleCancel={handleCancel}
          />
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
    </div>
  );
}

export default Welcome;
