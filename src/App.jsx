import { useState } from "react";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setEditingText(task.text);
  };

  const handleEditChange = (e) => {
    setEditingText(e.target.value);
  };

  const saveEdit = () => {
    setTasks(tasks.map((task) =>
      task.id === editingTaskId ? { ...task, text: editingText } : task
    ));
    setEditingTaskId(null);
    setEditingText("");
  };

  return (
    <div>
      <h1>Lista de tarea</h1>
      <TaskForm onAddTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <>
                <input value={editingText} onChange={handleEditChange} />
                <button onClick={saveEdit}>guardar</button>
              </>
            ) : (
              <>
                {task.text}
                <button onClick={() => startEditing(task)}>editar</button>
                <button onClick={() => deleteTask(task.id)}>eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
