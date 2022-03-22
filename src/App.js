import React, { useEffect, useState } from "react";
import FormLogin from "./Componentes/FormLogin";
import FormRegister from "./Componentes/FormRegister";
import Welcome from "./Componentes/Welcome";
import Visualizar from "./Componentes/Visualização";
import "./App.css";

const App = () => {
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
    if (typeof dbUser === "undefined") {
      localStorage.setItem("dbUser", JSON.stringify([]));
    } else {
      localStorage.setItem("dbUser", JSON.stringify(dbUser));
    }
  };

  const removeLocalStorage = (usuario) => {
    localStorage.removeItem(usuario);
  };

  const login = (value, nome) => {
    localStorage.setItem("logged", JSON.stringify(value));
    localStorage.setItem("nome", JSON.stringify(nome));
  };

  useEffect(() => {
    let user = localStorage.getItem("logged");
    if (user != null) {
      if (JSON.parse(user) === "marcela@gmail.com") {
        setTela("Visualizar");
      } else {
        setTela("Welcome");
      }
    } else {
      setTela("Login");
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
        setTela("Login");
      }
    } else {
      setMensage("Senha e confirmar senha não coicidem");
    }
  };

  const handleLogin = (e) => {
    if (getLocalStorage(e)) {
      if (e.email === "marcela@gmail.com" && e.senha === "1234") {
        setLogged(e.email);
        setTela("Visualizar");
      } else {
        setTela("Welcome");
      }
      login(e.email, e.nome);
    } else {
      setTela("Login");
      setMensage("Verifique seu email e senha, ou cadastre-se!");
    }
  };

  const editar = (editar) => {
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

  const onDeletar = (deletar) => {
    deletar.preventDefault();
    const users = getLocalStorage();
    const usuario = JSON.parse(localStorage.getItem("logged"));
    const removeData = users.map((user) => {
      if (user.email === usuario) {
        return user;
      } else {
        return users;
      }
    });
    localStorage.clear(removeData);
    setTela("Login");
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
    localStorage.removeItem("nome");
  };
  switch (tela) {
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
      const nome = JSON.parse(localStorage.getItem("nome"));
      const email = JSON.parse(localStorage.getItem("logged"));
      const dados = getLocalStorage({ email: email });
      return (
        <div>
          <Welcome
            name={nome}
            user={dados}
            deslogar={deslogar}
            onSubmit={editar}
            onDeletar={onDeletar}
          />
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
          <FormRegister onSubmit={handleRegister} onClickC={onClickC} />
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
          <FormRegister onSubmit={handleRegister} onClickC={onClickC} />
        </div>
      );
  }
};

export default App;
