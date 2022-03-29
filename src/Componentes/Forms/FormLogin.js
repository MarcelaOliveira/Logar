import React, { useState } from "react";
import { StyledForms } from "./StyledForms";
import { Row, Col, Card ,Form, Input, Button } from "antd";
import { MailOutlined, UnlockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function FormLogin(props) {
  const [values, setValues] = useState();
  const [buttonState, setButtonState] = useState();
  const setInputs = (evento) => {
    const stat = { ...values };
    stat[evento.target.name] = evento.target.value;
    setValues(stat);
  };

  const onSave = (evente) => {
    props.onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
              <img
                alt="Login"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_z_Cz4Q8MWWJsg8_B8SrNHMbfgrLY8Z7xY5jXM58Gz-Y8O9x4zej1v9wSWvqViQFeuMQ&usqp=CAU"
              />
            </Col>
            <Col
              className="gutter-row"
              justify="space-around"
              align="middle"
              span={10}
            >
              <h1>Logar</h1>
              <Form
                onFinish={onSave}
                autoComplete="off"
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="email"
                  value={props.email}
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
                  name="senha"
                  placeholder="Senha"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  value={props.senha}
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
                <Button htmlType="submit" className="register">
                  Logar
                </Button>
              </Form>
              <div>
                Não é cadastrado?
                <Button type="link" size={size} onClick={props.onClick}>
                  Cadastre-se
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </center>
    </StyledForms>
  );
}
