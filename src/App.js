import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
// import React from "react";
// import { BrowserRouter as Router,Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "gray";
      showAlert("Dark mood has been enable ", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mood has been enable ", "Success");
    }
  };
  return (
    <>
    
        <Navbar
          title="MenuTextBarr"
          about="This About "
          home="Home Here"
          toggleMode={toggleMode}
          mode={mode}
        />
        <Alert alert={alert} />
        <div className="container">
       <TextForm/>
       <About/>
        </div>
     
    </>
  );
}

export default App;
