import React, { useEffect, useState } from "react";
import FormLogin from "./Componentes/FormLogin";
import FormRegister from "./Componentes/FormRegister";
import Welcome from "./Componentes/Welcome";
import Visualizar from "./Componentes/Visualização";
import "./App.css";

const App = () => {
  const [values, setValues] = useState([]);
  const [tela, setTela] = useState("Cadastro");
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
    localStorage.setItem("dbUser", JSON.stringify(dbUser));
  };

  const login = (value) => {
    localStorage.setItem("logged", JSON.stringify(value));
  };

  useEffect(() => {
    let user = localStorage.getItem("logged");
    if (user != null) {
      if (user === "marcela@gmail.com") {
        setTela("Visualizar");
      } else {
        setTela("Welcome");
      }
    } else {
      setTela("Login");
    }
  }, []);

  const setInputs = (evento) => {
    const stat = { ...values };
    stat[evento.target.name] = evento.target.value;
    setValues(stat);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (values.senha === values.confSenha) {
      if (getLocalStorage(values)) {
        setMensage("Usuário já cadastrado, faça login, ou verifique o email");
      } else {
        const dbUser = getLocalStorage();
        dbUser.push(values);
        setLocalStorage(dbUser);
        setTela("Login");
      }
    } else {
      setMensage("Senha e confirmar senha não coicidem");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (getLocalStorage(values)) {
      if (values.email === "marcela@gmail.com" && values.senha === "1234") {
        setLogged(values.email);
        setTela("Visualizar");
      } else {
        setTela("Welcome");
      }
      login(values.email);
    } else {
      setTela("Login");
      setMensage("Verifique seu email e senha, ou cadastre-se!");
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    setTela("Cadastro");
  };

  const onClickC = (e) => {
    e.preventDefault();
    setTela("Login");
  };

  const deslogar = (e) => {
    e.preventDefault();
    setTela("Login");
    localStorage.removeItem("logged");
  };
  console.log(tela);
  switch (tela) {
    case "Login":
      return (
        <div>
          <FormLogin
            onSubmit={handleLogin}
            setInputs={setInputs}
            onClick={onClick}
          />
          {mensage.length > 0 && (
            <div className="container d-flex justify-content-center">
              <spam>{mensage}</spam>
            </div>
          )}
        </div>
      );
    case "Welcome":
      return (
        <div>
          <Welcome nome={values.nome} deslogar={deslogar} />
        </div>
      );
    case "Visualizar":
      const users = getLocalStorage();
      return (
        <div>
          <Visualizar users={users} deslogar={deslogar} />
        </div>
      );
    case "Cadastro":
      return (
        <div>
          {mensage.length > 0 && (
            <div className="container d-flex justify-content-center">
              <spam>{mensage}</spam>
            </div>
          )}
          <FormRegister
            onSubmit={handleRegister}
            setInputs={setInputs}
            onClickC={onClickC}
          />
        </div>
      );
    default:
      return (
        <div>
          {mensage.length > 0 && (
            <div className="container d-flex justify-content-center">
              <spam>{mensage}</spam>
            </div>
          )}
          <FormRegister
            onSubmit={handleRegister}
            setInputs={setInputs}
            onClickC={onClickC}
          />
        </div>
      );
  }
};

export default App;
