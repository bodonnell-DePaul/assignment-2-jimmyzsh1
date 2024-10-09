import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ToDoCreator from './ToDoCreator';
import MissionList from './MissionList';
import Description from './Description';
import { todos as initialTodos } from './todoItems';  
import './ViewPort.css';

const ViewPort = () => {
  // 初始化状态
  const [todos, setTodos] = useState(initialTodos);
  const [selectedTodo, setSelectedTodo] = useState(null);

  // 更新任务内容的函数
  const updateTodo = (id, updatedFields) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => 
        todo.id === id ? { ...todo, ...updatedFields } : todo
      )
    );
  };

  return (
    <Container>
      <Row className="top-margin">
        <h2>Assignment2 Shihua's ToDoList</h2>
      </Row>
      <Row>
        <Col sm={4}>
          <ToDoCreator todos={todos} setTodos={setTodos} />
        </Col>
        <Col sm={4}>
          <MissionList todos={todos} setSelectedTodo={setSelectedTodo} />
        </Col>
        <Col sm={4}>
          {selectedTodo && (
            <Description 
              selectedTodo={selectedTodo} 
              updateTodo={(newDescription, newDueDate) =>
                updateTodo(selectedTodo.id, { description: newDescription, dueDate: newDueDate })
              }
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ViewPort;
