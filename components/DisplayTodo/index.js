import { useContext, useEffect } from 'react';
import { TodoListContext } from '../../context/Todolist';
import style from './DisplayTodo.module.scss';
import EmptyCard from '../Global/EmptyCard'

const DisplayTodo = () => {

  const { todoList, removeTodo, markTodo } = useContext(TodoListContext)

  return (
    <div className={style.wrapper}>
      {todoList.length > 0 ?
        <ul>
          {todoList.map((item, index) => (
            <li className={item.isDone ? "" : ""} key={item} >

              <span className={`${style.text} ${item.isDone ? style.isDone : ""}`}>
                {item.text}
              </span>


              <span className={style.remove} onClick={() => removeTodo(index)}>
                remove
              </span>
              <span className={style.mark} onClick={() => { markTodo(index) }}>
                mark
              </span>
            </li>
          ))}

        </ul>
        :
        <EmptyCard message={"your list is empty"} />

      }

    </div >

  )
}
export default DisplayTodo;