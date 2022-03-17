import React, { useEffect, useState } from "react";
import FormLogin from "./Componentes/FormLogin";
import FormRegister from "./Componentes/FormRegister";
import Welcome from "./Componentes/Welcome";
import "./App.css";

const App = () => {
  const [values, setValues] = useState([{}]);
  const [valuesAux, setValuesAux] = useState([{}]);
  const [users, setUsers] = useState([{}]);
  const [tela, setTela] = useState("Cadastro");
  const [mensage, setMensage] = useState({});

  const getLocalStorage = (usuario) => {
    const dbUserStorage = localStorage.getItem("dbUserStorage");
    const dbUser = dbUserStorage ? JSON.parse(dbUserStorage) : [];
    if (usuario) {
      return dbUser.find((user) => user.email === usuario.email);
    } else {
      return dbUser;
    }
  };

  const setLocalStorage = (dbUser) => {
    localStorage.setItem("dbUser", JSON.stringify(dbUser));
    setUsers(dbUser);
  };

  useEffect(() => {
    const dbUser = getLocalStorage();
    dbUser.push(valuesAux);
    setLocalStorage(dbUser);
  }, [valuesAux]);

  useEffect(() => {
    const dbUser = getLocalStorage();
    console.log(dbUser);
    if (!dbUser) {
      setLocalStorage();
    } else {
      setLocalStorage(dbUser);
    }
  }, []);

  const setInputs = (evento) => {
    const stat = { ...values };
    stat[evento.target.name] = evento.target.value;
    setValues(stat);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (getLocalStorage(values)) {
      setMensage("Usuário já cadastrado");
    } else {
      setValuesAux(values);
      setTela("Login");
      setMensage("Registro Salvo");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (getLocalStorage(values)) {
      if (values.email === "marcela@gmail.com" && values.senha === "1234") {
        setTela("Welcome");
        setMensage("Deu bom");
      } else {
        setTela("Welcome");
      }
    } else {
      setTela("Login");
      setMensage("Verifique seu email e senha, ou cadastre-se!");
    }
  };

  switch (tela) {
    case "Login":
      return (
        <div>
          <FormLogin onSubmit={handleLogin} setInputs={setInputs} />
          {mensage.length > 0 && (
            <div className="container d-flex justify-content-center">
              <h2>{mensage}</h2>
            </div>
          )}
        </div>
      );
    case "Welcome":
      return (
        <div>
          <Welcome nome={values.nome} />
          {mensage.length > 0 && (
            <div className="container d-flex justify-content-center">
              <h2>{mensage}</h2>
            </div>
          )}
        </div>
      );
    case "Cadastro":
      return (
        <div>
          <FormRegister onSubmit={handleRegister} setInputs={setInputs} />
          {mensage.length > 0 && (
            <div className="container d-flex justify-content-center">
              <h2>{mensage}</h2>
            </div>
          )}
        </div>
      );
    default:
      return (
        <div>
          <FormRegister onSubmit={handleRegister} setInputs={setInputs} />
          {mensage.length > 0 && (
            <div className="container d-flex justify-content-center">
              <h2>{mensage}</h2>
            </div>
          )}
        </div>
      );
  }
};

export default App;
