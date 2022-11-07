import Layout from "../../components/layout";
import TodoListIndex from "../../components/TodoListIndex";
import TodoListContextProvider from "../../context/Todolist";

const TodoList = () => {
  return (
    <Layout>
      <TodoListContextProvider>
        <TodoListIndex />
      </TodoListContextProvider>
    </Layout>

  )
}
export default TodoList