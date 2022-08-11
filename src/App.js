import "./App.less";
import React from "react";
import Header from "./components/ReactHead/index";
import Todo from "./Todoindex";
function App() {
  return (
    <div>
      <Header id="Header"></Header>
      <Todo></Todo>
    </div>
  );
}

export default App;
