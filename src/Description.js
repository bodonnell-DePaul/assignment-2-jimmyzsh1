import { useState, useEffect } from 'react';
import { Tab, Tabs, Form } from 'react-bootstrap';

function Description({ selectedTodo, updateTodo }) {
  const [dueDate, setDueDate] = useState(selectedTodo ? selectedTodo.dueDate : '');

  useEffect(() => {
    if (selectedTodo) {
      setDueDate(selectedTodo.dueDate);
    }
  }, [selectedTodo]);

/*  const handleSave = () => {
    if (selectedTodo) {
      updateTodo(selectedTodo.id, selectedTodo.description, dueDate);
    }
  }; */

  if (!selectedTodo) {
    return <div className="p-3">Select a todo to see the details.</div>;
  }

  return (
    <Tabs defaultActiveKey="description" id="todo-tabs">
      <Tab eventKey="description" title="Description">
        <div className="p-3">
          <h5>Description</h5>
          <div className="border p-2" style={{ minHeight: '100px' }}>
            {selectedTodo.description} {/* 显示静态描述 */}
          </div>
          <Form.Group controlId="dueDate" className="mt-3">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </Form.Group>
        </div>
      </Tab>
    </Tabs>
  );
}

export default Description;
