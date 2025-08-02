import { useState } from "react";
import TaskForm from "./components/TaskForm";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor ingresa usuario y contraseña");
      return;
    }

    // Simulamos login exitoso
    onLogin(username);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
      <h2>Iniciar sesión</h2>
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
}

function App() {
  const [user, setUser] = useState(null);

  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

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

  if (!user) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div>
      <h1>Hola, {user}</h1>
      <button onClick={() => setUser(null)}>Cerrar sesión</button>

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
