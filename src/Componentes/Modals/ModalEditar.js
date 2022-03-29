import React, { useState, useEffect } from "react";
import { StyledForms } from "../Forms/StyledForms";
import { Modal, Form, Input, Button } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  UnlockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "antd/dist/antd.css";

export default function ModalEditar(props) {
  const [userEdit, setUserEdit] = useState({});
  const [erro, setErro] = useState({});
  const [buttonState, setButtonState] = useState();
  const { nome, email, endereco, telefone, senha, confSenha } = props;

  const setInputs = (evento) => {
    const stat = { ...userEdit };
    stat[evento.target.name] = evento.target.value;
    setUserEdit(stat);
  };

  const onSave = (evente) => {
    if (evente.senha === evente.confSenha) {
      props.onFinish(userEdit);
    } else {
      setErro("Senha e confirmar senha devem ser iguais!");
    }
  };
  const handleSizeChange = (e) => {
    setButtonState({ size: e.target.value });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const size = buttonState;
  useEffect(() => {
    setUserEdit({ nome, email, endereco, telefone, senha, confSenha });
  }, [props]);

  return (
    <div>
      <Modal
        title="Editar conta"
        visible={props.isModalVisible}
        onOk={props.handleCancel}
        onCancel={props.handleCancel}
      >
        <StyledForms>
          <center>
              <Form
                onFinish={onSave}
                autoComplete="off"
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="nome"
                  value={userEdit.nome}
                  onChange={setInputs}
                  rules={[
                    {
                      required: true,
                      message: "Por favor preencha todos os campos!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    name="nome"
                    className="input"
                    type="text"
                    placeholder="Nome"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  value={userEdit.email}
                  onChange={setInputs}
                  rules={[
                    {
                      required: true,
                      message: "Por favor preencha todos os campos!",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    name="email"
                    className="input"
                    type="email"
                    placeholder="name@example.com"
                  />
                </Form.Item>
                <Form.Item
                  name="endereco"
                  value={userEdit.endereco}
                  onChange={setInputs}
                  rules={[
                    {
                      required: true,
                      message: "Por favor preencha todos os campos!",
                    },
                  ]}
                >
                  <Input
                    prefix={<HomeOutlined />}
                    name="endereco"
                    className="input"
                    placeholder="Rua: Tal,1234"
                  />
                </Form.Item>
                <Form.Item
                  name="telefone"
                  value={userEdit.telefone}
                  onChange={setInputs}
                  rules={[
                    {
                      required: true,
                      message: "Por favor preencha todos os campos!",
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined />}
                    name="telefone"
                    type="text"
                    className="input"
                    placeholder="(DD)94834-4456"
                  />
                </Form.Item>
                <Form.Item
                  name="senha"
                  placeholder="Senha"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  value={userEdit.senha}
                  onChange={setInputs}
                  rules={[
                    {
                      required: true,
                      message: "Por favor preencha todos os campos!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<UnlockOutlined />}
                    name="senha"
                    className="input"
                    type="password"
                    placeholder="Senha"
                  />
                </Form.Item>

                <Form.Item
                  name="confSenha"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  value={userEdit.confSenha}
                  onChange={setInputs}
                  rules={[
                    {
                      required: true,
                      message: "Por favor preencha todos os campos!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<UnlockOutlined />}
                    name="confSenha"
                    className="input"
                    type="password"
                    placeholder="Confirmar Senha"
                  />
                </Form.Item>
                {erro.length > 0 && (
                  <center>
                    <spam>{erro}</spam>
                  </center>
                )}
                <Button htmlType="submit" className="register">
                  Register
                </Button>
              </Form>
          </center>
        </StyledForms>
      </Modal>
    </div>
  );
}
