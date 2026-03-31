import Text from '../components/Text/Text';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = e => {
    e.preventDefault();
    const text = e.target.search.value.trim();
    const newTodo = {
      text,
      id: nanoid(),
    };

    setTodos([...todos, addTodo]);

    // setTodos(prevTodos => {
    //   return [...prevTodos, newTodo];
    // });

    console.log(newTodo);
  };

  return (
    <>
      <Text textAlign="center">There are no any todos ...</Text>
      <Form onSubmit={addTodo} />
    </>
  );
};

export default Todos;
