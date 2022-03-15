import React from "react";
import { useState } from "react";
import "./App.css";
import FormLogin from "./Componentes/FormLogin";
import Welcome from "./Componentes/Welcome";

const App = () => {
  const [values, setValues] = useState({});
  const [tela, setTela] = useState(false);
  const [mensage, setMensage] = useState({});

  const setInputs = (event) => {
    const state = { ...values };
    state[event.target.name] = event.target.value;
    setValues(state);
  };
  const handleLogin = (e) => {
    console.log(values);
    e.preventDefault();
    if (values.email === "marcela@gmail.com" && values.senha === "1234") {
      setTela(true);
    } else {
      setTela(false);
      setMensage("Verifique seu email e senha");
    }
  };

  if (tela) {
    return <Welcome nome={values.nome} />;
  } else {
    return (
      <div id="App">
        <FormLogin onSubmit={handleLogin} setInputs={setInputs} />
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
