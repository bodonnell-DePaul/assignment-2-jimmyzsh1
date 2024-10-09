import ListGroup from 'react-bootstrap/ListGroup';

function MissionList({ todos, setSelectedTodo }) {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item
          key={todo.id}
          action
          onClick={() => setSelectedTodo(todo)} 
          variant={getBootstrapVariant(todo.dueDate)}  // 使用 Bootstrap 的 variant
        >
          {todo.title} (Due: {todo.dueDate})
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

// 使用 Bootstrap 提供的颜色选项
function getBootstrapVariant(dueDate) {
  const currentDate = new Date();
  const todoDate = new Date(dueDate);
  const timeDifference = todoDate - currentDate;
  const hoursRemaining = timeDifference / (1000 * 60 * 60); // 毫秒转换成小时

  if (hoursRemaining > 168) {  // 超过 7 天
    return 'primary';  // 蓝色
  } else if (hoursRemaining > 96) {  // 4 到 7 天
    return 'success';  // 绿色
  } else if (hoursRemaining > 48) {  // 2 到 4 天
    return 'warning';  // 黄色
  } else if (hoursRemaining >= 1) {  // 1 到 2 天
    return 'danger';  // 红色
  } else {
    return 'secondary';  // 灰色，表示任务已经过期
  }
}

export default MissionList;
