import React, { useState } from "react";
import { StyledForms } from "./StyledForms";
import { Form, Input, Button } from "antd";
import { Row, Col, Card } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function FormCadastro(props) {
  const { nome, email, endereco, telefone, senha, confSenha, onClick } = props;
  const [values, setValues] = useState();
  const [erro, setErro] = useState({});
  const [buttonState, setButtonState] = useState();
  const setInputs = (evento) => {
    const stat = { ...values };
    stat[evento.target.name] = evento.target.value;
    setValues(stat);
  };

  const onSave = (evente) => {
    if (values.senha === values.confSenha) {
      props.onFinish(values);
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
  return (
    <StyledForms>
      <center>
        <Card
          type="inner"
          style={{ marginTop: 80, width: 1000 }}
          justify="space-around"
          align="middle"
        >
          <Row justify="space-around" align="middle">
            <Col
              className="gutter-row"
              justify="space-around"
              align="middle"
              span={8}
            >
              <img
                alt="Register"
                src="https://img.freepik.com/free-vector/women-freelance-african-girl-headphones-with-laptop-sitting-table-concept-illustration-working-from-home-studying-education-communication-healthy-lifestyle-vector-flat-style_189033-266.jpg?size=338&ext=jpg"
              />
            </Col>
            <Col
              className="gutter-row"
              justify="space-around"
              align="middle"
              span={10}
            >
              <h1>Register</h1>
              <Form
                onFinish={onSave}
                autoComplete="off"
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="nome"
                  value={nome}
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
                  value={email}
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
                  value={endereco}
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
                  value={telefone}
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
                  value={senha}
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
                  value={confSenha}
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
              <div>
                Já é cadastrado?
                <Button type="link" size={size} onClick={onClick}>
                  Login
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </center>
    </StyledForms>
  );
}
