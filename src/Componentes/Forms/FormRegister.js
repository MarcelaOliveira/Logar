import React, { useState } from "react";
import { StyledForms } from "./StyledForms";
import { Input, Layout, Button } from "antd";
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
  const { Content } = Layout;
  const [values, setValues] = useState([]);
  const [buttonState, setButtonState] = useState();
  const setInputs = (evento) => {
    const stat = { ...values };
    stat[evento.target.name] = evento.target.value;
    setValues(stat);
  };

  const onSave = (evente) => {
    evente.preventDefault();
    props.onSubmit(values);
  };

  const handleSizeChange = (e) => {
    setButtonState({ size: e.target.value });
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
              <img src="https://img.freepik.com/free-vector/women-freelance-african-girl-headphones-with-laptop-sitting-table-concept-illustration-working-from-home-studying-education-communication-healthy-lifestyle-vector-flat-style_189033-266.jpg?size=338&ext=jpg" />
            </Col>
            <Col
              className="gutter-row"
              justify="space-around"
              align="middle"
              span={10}
            >
              <h1>Register</h1>
              <form onSubmit={onSave}>
                <div>
                  <Input
                    prefix={<UserOutlined />}
                    className="input"
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={nome}
                    onChange={setInputs}
                  />
                </div>
                <br />
                <div>
                  <Input
                    prefix={<MailOutlined />}
                    className="input"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={setInputs}
                  />
                </div>
                <br />
                <div>
                  <Input
                    prefix={<HomeOutlined />}
                    className="input"
                    name="endereco"
                    placeholder="Rua: Tal,1234"
                    value={endereco}
                    onChange={setInputs}
                  />
                </div>
                <br />
                <div>
                  <Input
                    prefix={<PhoneOutlined />}
                    className="input"
                    name="telefone"
                    placeholder="(DD)94834-4456"
                    value={telefone}
                    onChange={setInputs}
                  />
                </div>
                <br />
                <div>
                  <Input.Password
                    prefix={<UnlockOutlined />}
                    className="input"
                    label="Senha"
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    value={senha}
                    onChange={setInputs}
                  />
                </div>
                <br />
                <div>
                  <Input.Password
                    prefix={<UnlockOutlined />}
                    className="input"
                    label="Confirmar Senha"
                    type="password"
                    name="confSenha"
                    placeholder="Confirmar Senha"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    value={confSenha}
                    onChange={setInputs}
                  />
                </div>
                <br />
                <Button className="register">Register</Button>
              </form>
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
