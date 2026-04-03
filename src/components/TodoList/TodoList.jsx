import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ array, onDelete }) => {
  return (
    <Grid>
      {array.map((element, index) => (
        <GridItem key={element.id}>
          <TodoListItem todo={element} index={index} onDelete={onDelete} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
