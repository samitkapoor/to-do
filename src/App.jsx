import { useState } from "react";

import MyForm from "./components/MyForm";
import MyTasks from "./components/MyTasks";

import "./styles/app.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState([
    { id: crypto.randomUUID(), title: "Take shower", completed: false }
  ]);

  function changeNewItem(e) {
    e.preventDefault();
    setNewItem(e.target.value);
  }

  function addNewItem() {
    console.log(newItem);
    if(newItem != "")
      setTodoList([...todoList, { id: crypto.randomUUID(), title: newItem, completed: false }]);
    console.log(todoList)
  }

  return <div className="background">
    <div className="opaque-bg"></div>
    <div className="app">
      <MyForm newItem={newItem} onSubmit={addNewItem} onChange={changeNewItem}></MyForm>
      <MyTasks todoList={ todoList }></MyTasks>
    </div>
  </div>
}