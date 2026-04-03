import Text from '../components/Text/Text';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = e => {
    e.preventDefault();
    const text = e.target.search.value.trim();
    const newTodo = {
      text,
      id: nanoid(),
    };

    setTodos([...todos, newTodo]);

    // setTodos(prevTodos => {
    //   return [...prevTodos, newTodo];
    // });

    console.log(newTodo);

    e.target.reset();
  };

  return (
    <>
      <Text textAlign="center">There are no any todos ...</Text>
      <Form onSubmit={addTodo} />
      <TodoList array={todos} />
    </>
  );
};

export default Todos;
