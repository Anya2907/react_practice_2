import Text from '../components/Text/Text';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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

  const deleteTodo = id => {
    setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Text textAlign="center">There are no any todos ...</Text>
      <Form onSubmit={addTodo} />
      <TodoList array={todos} onDelete={deleteTodo} />
    </>
  );
};

export default Todos;
