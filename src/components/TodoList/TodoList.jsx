import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ array }) => {
  return (
    <Grid>
      {array.map((element, index) => (
        <GridItem key={element.id}>
          <TodoListItem todo={element} index={index} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
