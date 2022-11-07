import { TextFiled } from '../Global/TextFiled';
import styles from './AddTodo.module.scss';
import { FormControl } from '../Global/FormControl';
import CustomButton from '../Global/CustomButton';
import { TodoListContext } from '../../context/Todolist'
import { useContext, useState } from 'react';
const AddTodo = () => {
  const [data, setData] = useState({
    text: '',
    isDone: false
  });
  const { addTodo } = useContext(TodoListContext)

  const updateList = (event) => {
    event.preventDefault();
    addTodo(data);
    setData({
      text: '',
      isDone: false
    })

    // @todo save Data

  }
  const TextFiledHandler = (event) => {
    setData(prevData => ({
      ...prevData,
      text: event.target.value
    }));

  }

  return (
    <div className={styles.wrapper}>
      <h4 >
        Add to the todo list
      </h4>
      <FormControl handler={updateList} >
        <TextFiled value={data.text} handleChange={TextFiledHandler} />
        <CustomButton message='Add' type='submit' />
      </FormControl>


    </div>
  )
}
export default AddTodo;