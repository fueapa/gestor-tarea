import { useState } from "react";

function TaskForm({onAddTask}) { 
    const [task, setTask] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') return;

        onAddTask(task);
        setTask('');
    };

    return (
        <form onSubmit={handlesubmit}>
            <input
            type="text"
            placeholder="escribe una tarea"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">agregar</button>
        </form>
    );

} 

export default TaskForm;