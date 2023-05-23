import { useState } from "react";

import MyForm from "./components/MyForm";
import MyTasks from "./components/MyTasks";

import "./styles/app.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function changeNewItem(e) {
    e.preventDefault();
    setNewItem(e.target.value);
  }

  function addNewItem(e) {
    e.preventDefault();
    if(newItem != "")
      setTodoList([...todoList, { id: crypto.randomUUID(), title: newItem, completed: false }]);
    
    setNewItem("");
  }

  return <div className="background">
    <div className="opaque-bg"></div>
    <div className="app">
      <MyForm newItem={newItem} onSubmit={addNewItem} onChange={changeNewItem}></MyForm>
      <MyTasks todoList={todoList}></MyTasks>
    </div>
  </div>
}