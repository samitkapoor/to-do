import { useEffect, useState } from "react";

import MyForm from "./components/MyForm";
import MyTasks from "./components/MyTasks";

import "./styles/app.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState(() => {
    console.log("hey");
    const myItems = localStorage.getItem("ITEMS");
    if (myItems == null) return [];
    return JSON.parse(myItems);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoList));
  }, [todoList]);

  function changeNewItem(e) {
    e.preventDefault();
    setNewItem(e.target.value);
  }

  function addNewItem(e) {
    e.preventDefault();
    if (newItem != "")
      setTodoList([
        ...todoList,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]);

    setNewItem("");
  }

  function toggleCompleteCheck(key, completed) {
    setTodoList((currentTodo) => {
      return currentTodo.map((todoItem) => {
        if (todoItem.id === key) {
          return { ...todoItem, completed };
        }
        return todoItem;
      });
    });
  }

  function deleteItem(key) {
    setTodoList((currentTodo) => {
      return currentTodo.filter((todoItem) => todoItem.id != key);
    });
  }

  return (
    <div className="background">
      <div className="opaque-bg"></div>
      <div className="app">
        <MyForm
          newItem={newItem}
          onSubmit={addNewItem}
          onChange={changeNewItem}
        ></MyForm>
        <MyTasks
          todoList={todoList}
          onToggleComplete={toggleCompleteCheck}
          onDelete={deleteItem}
        ></MyTasks>
      </div>
    </div>
  );
}
