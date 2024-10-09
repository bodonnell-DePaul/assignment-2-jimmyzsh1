import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TaskCreator = ({ taskList, updateTaskList }) => {
  // 初始化任务的状态
  const [taskDetails, setTaskDetails] = useState({
    title: '',
    dueDate: '',
    description: '',
  });

  // 处理输入变化
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // 处理表单提交
  const onFormSubmit = (event) => {
    event.preventDefault();

    // 为新任务生成唯一ID
    const newId = taskList.length ? taskList[taskList.length - 1].id + 1 : 1;

    // 创建新的任务对象
    const newTask = {
      id: newId,
      ...taskDetails,
    };

    // 将新任务添加到任务列表中
    updateTaskList((prevList) => [...prevList, newTask]);

    // 重置表单
    setTaskDetails({
      title: '',
      dueDate: '',
      description: '',
    });
  };

  return (
    <Form onSubmit={onFormSubmit} className="task-form">
      <Form.Group controlId="taskTitle">
        <Form.Label>Task Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter task title"
          value={taskDetails.title}
          onChange={onInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="taskDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          name="dueDate"
          value={taskDetails.dueDate}
          onChange={onInputChange}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit" className="submit-btn">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskCreator;
