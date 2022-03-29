import React, { useEffect, useState } from "react";
import FormLogin from "./Componentes/Forms/FormLogin";
import FormRegister from "./Componentes/Forms/FormRegister";
import Welcome from "./Componentes/Welcome";
import ViewAdm from "./Componentes/ViewAdm";
import { notification, Divider, Space } from "antd";
import "./App.css";

const App = () => {
  const [screen, setScreen] = useState("Register");
  const [logged, setLogged] = useState();
  const [mensage, setMensage] = useState({});

  const getLocalStorage = (usuario) => {
    const dbUserStorage = localStorage.getItem("dbUser");
    const dbUser = dbUserStorage ? JSON.parse(dbUserStorage) : [];
    if (usuario) {
      return dbUser.find((user) => user.email === usuario.email);
    } else {
      return dbUser;
    }
  };

  const confirmSenha = (userSenha) => {
    const dbUser = getLocalStorage();
    return dbUser.find(
      (user) => user.email === userSenha.email && user.senha === userSenha.senha
    );
  };

  const setLocalStorage = (dbUser) => {
    if (typeof dbUser === "undefined") {
      localStorage.setItem("dbUser", JSON.stringify([]));
    } else {
      localStorage.setItem("dbUser", JSON.stringify(dbUser));
    }
  };

  useEffect(() => {
    let user = localStorage.getItem("logged");
    if (user != null) {
      if (JSON.parse(user) === "marcela@gmail.com") {
        setScreen("ViewAdm");
      } else {
        setScreen("Welcome");
      }
    } else {
      setScreen("Register");
    }
  }, []);

  const handleRegister = (event) => {
    if (getLocalStorage(event)) {
      setMensage("Usuário já cadastrado, faça login, ou verifique o email");
    } else {
      const dbUser = getLocalStorage();
      dbUser.push(event);
      setLocalStorage(dbUser);
      setScreen("Login");
    }
  };

  const handleLogin = (e) => {
    if (confirmSenha(e)) {
      if (e.email === "marcela@gmail.com" && e.senha === "1234") {
        setLogged(e.email);
        setScreen("ViewAdm");
      } else {
        setScreen("Welcome");
      }
      localStorage.setItem("logged", JSON.stringify(e.email));
    } else {
      setScreen("Login");
      setMensage("Verifique seu email e senha, ou cadastre-se!");
    }
  };
  const handleEditar = (editar) => {
    const users = getLocalStorage();
    const usuario = JSON.parse(localStorage.getItem("logged"));
    const newData = users.map((user) => {
      if (user.email === usuario) {
        return { ...editar };
      } else {
        return users;
      }
    });
    setLocalStorage(newData);
    localStorage.setItem("logged", JSON.stringify(editar.email));
  };

  const handleDeletar = (deletar) => {
    deletar.preventDefault();
    const users = getLocalStorage();
    const usuario = JSON.parse(localStorage.getItem("logged"));
    const newData = users.filter((user) => {
      return user.email !== usuario;
    });
    setLocalStorage(newData);
    localStorage.removeItem("logged");
    setScreen("Login");
  };

  const onClick = (e) => {
    e.preventDefault();
    if (screen === "Login") {
      setScreen("Register");
    } else {
      setScreen("Login");
    }
  };

  const deslogar = (e) => {
    e.preventDefault();
    setScreen("Login");
    localStorage.removeItem("logged");
  };
  switch (screen) {
    case "Login":
      return (
        <div>
          <FormLogin onSubmit={handleLogin} onClick={onClick} />
          {mensage.length > 0 &&
            notification.info({
              message: `Mensagem de erro`,
              description: { mensagem: mensage },
            })}
        </div>
      );
    case "Welcome":
      const email = JSON.parse(localStorage.getItem("logged"));
      const data = getLocalStorage({ email: email });
      return (
        <div>
          <Welcome
            user={data}
            deslogar={deslogar}
            onSubmit={handleEditar}
            onDeletar={handleDeletar}
          />
        </div>
      );
    case "ViewAdm":
      const users = getLocalStorage();
      return (
        <div>
          <ViewAdm users={users} deslogar={deslogar} />
        </div>
      );
    case "Register":
      return (
        <div className="register">
          <FormRegister onFinish={handleRegister} onClick={onClick} />
        </div>
      );
    default:
      return (
        <div className="register">
          <FormRegister onFinish={handleRegister} onClick={onClick} />
        </div>
      );
  }
};

export default App;
