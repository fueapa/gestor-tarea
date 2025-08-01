import { useState } from "react";
import TaskForm from "./components/TaskForm";

function App() { 
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => { 
      setTasks ([...tasks, {id: Date.now(), text: newTask}]);

  };

  return (
    <div> 
      <h1>lista de tareas</h1>
      <TaskForm onAddTask={addTask} /> 

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App; 