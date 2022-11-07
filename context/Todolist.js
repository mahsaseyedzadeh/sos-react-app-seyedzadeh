import React, { useEffect, useState } from 'react';

export const TodoListContext = React.createContext({});

export const TodoListContextProvider = ({ children }) => {

  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const newTodoList = [...todoList, todo];
    setTodoList(newTodoList)
  }
  const removeTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);

  }
  const markTodo = (index) => {
    // @todo 
    const newTodoList = [...todoList];
    newTodoList[index].isDone = !newTodoList[index].isDone;
    setTodoList(newTodoList);
  }



  return (
    <TodoListContext.Provider value={{ todoList, addTodo, removeTodo, markTodo }}>{children}</TodoListContext.Provider>
  );
}

export default TodoListContextProvider;