import { Grid } from "@mui/material";
import TodoListCard from "../TodoListCard";


const TodoListIndex = () => {
  return (
    <main className="main">
      <Grid container
        direction="row"
        alignItems="center"
        justifyContent="center">
        <Grid item xs={12} md={6} lg={6}>
          <TodoListCard />

        </Grid>
      </Grid>

    </main>
  )
}
export default TodoListIndex