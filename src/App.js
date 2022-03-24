import React, { useEffect, useState } from "react";
import FormLogin from "./Componentes/Forms/FormLogin";
import FormRegister from "./Componentes/Forms/FormRegister";
import Welcome from "./Componentes/Welcome";
import "./App.css";
import View from "./Componentes/View";

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

  const setLocalStorage = (dbUser) => {
    if (typeof dbUser === "undefined") {
      localStorage.setItem("dbUser", JSON.stringify([]));
    } else {
      localStorage.setItem("dbUser", JSON.stringify(dbUser));
    }
  };

  const login = (email) => {
    localStorage.setItem("logged", JSON.stringify(email));
  };

  useEffect(() => {
    let user = localStorage.getItem("logged");
    if (user != null) {
      if (JSON.parse(user) === "marcela@gmail.com") {
        setScreen("Visualizar");
      } else {
        setScreen("Welcome");
      }
    } else {
      setScreen("Login");
    }
  }, []);

  const handleRegister = (event) => {
    if (event.senha === event.confSenha) {
      if (getLocalStorage(event)) {
        setMensage("Usuário já cadastrado, faça login, ou verifique o email");
      } else {
        const dbUser = getLocalStorage();
        dbUser.push(event);
        setLocalStorage(dbUser);
        setScreen("Login");
      }
    } else {
      setMensage("Senha e confirmar senha não coicidem");
    }
  };

  const handleLogin = (e) => {
    if (getLocalStorage(e)) {
      if (e.email === "marcela@gmail.com" && e.senha === "1234") {
        setLogged(e.email);
        setScreen("View");
      } else {
        setScreen("Welcome");
      }
      login(e.email);
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
    login(editar.email, editar.nome);
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
          {mensage.length > 0 && (
            <div className="container d-flex justify-content-center">
              <spam>{mensage}</spam>
            </div>
          )}
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
    case "View":
      const users = getLocalStorage();
      return (
        <div>
          <View users={users} deslogar={deslogar} />
        </div>
      );
    case "Register":
      return (
        <div className="register">
          {mensage.length > 0 && (
            <div className="container d-flex justify-content-center">
              <spam>{mensage}</spam>
            </div>
          )}
          <FormRegister onSubmit={handleRegister} onClick={onClick} />
        </div>
      );
    default:
      return (
        <div className="register">
          {mensage.length > 0 && (
            <div className="container d-flex justify-content-center">
              <spam>{mensage}</spam>
            </div>
          )}
          <FormRegister onSubmit={handleRegister} onClick={onClick} />
        </div>
      );
  }
};

export default App;
