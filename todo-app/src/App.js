import React from 'react';
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap';
import todos from './todoItems';  // 导入ToDo数据
import './App.css';

// 颜色编码函数
const getColorVariant = (dueDate) => {
  const today = new Date();
  const due = new Date(dueDate);
  const diffTime = due - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  // 将时间差转换为天数

  if (diffDays > 7) return 'primary';    // 大于7天
  if (diffDays <= 7 && diffDays >= 4) return 'success';  // 小于等于7天，大于等于4天
  if (diffDays < 4 && diffDays >= 2) return 'warning';   // 小于4天，大于等于2天
  return 'danger';  // 小于2天
};

function App() {
  return (
    <Container>
      <h1>Assignment 2: Jimmy Zhang ToDo List</h1>
      <Row>
        {/* 左侧的ToDo标题列表 */}
        <Col sm={4}>
          <ListGroup>
            {todos.map((todo, index) => (
              <ListGroup.Item
                action
                href={`#${index}`}
                key={index}
                variant={getColorVariant(todo.dueDate)}
              >
                {todo.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* 右侧的ToDo详情显示 */}
        <Col sm={8}>
          <Tab.Content>
            {todos.map((todo, index) => (
              <Tab.Pane eventKey={`#${index}`} key={index}>
                <h3 contentEditable="true">{todo.description}</h3>
                <input type="date" defaultValue={todo.dueDate} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>

      {/* 添加新的ToDo表单 */}
      <form>
        <input type="text" placeholder="Add ToDo Title" />
        <input type="date" />
        <button type="submit">Add ToDo</button>
      </form>
    </Container>
  );
}

export default App;
