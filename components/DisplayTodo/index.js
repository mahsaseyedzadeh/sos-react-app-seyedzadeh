import { useContext, useEffect } from 'react';
import { TodoListContext } from '../../context/Todolist';
import style from './DisplayTodo.module.scss';
import EmptyCard from '../Global/EmptyCard'

const DisplayTodo = () => {

  const { todoList, removeTodo } = useContext(TodoListContext)

  return (
    <div className={style.wrapper}>
      {todoList.length > 0 ?
        <ul>
          {todoList.map((item, index) => (
            <li key={item} >
              {item.text}
              <span className={style.remove} onClick={() => removeTodo(index)}>
                remove
              </span>
            </li>
          ))}

        </ul>
        :
        <EmptyCard message={"your list is empty"} />

      }

    </div>

  )
}
export default DisplayTodo;