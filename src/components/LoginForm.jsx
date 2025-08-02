import { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion
    if (username.trim() === "" || password.trim() === "") {
      alert("ingresa usuario y contra");
      return;
    }

    // login exitoso
    onLogin(username);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
      <h2>inicar sesion</h2>
      <div>
        <label>usuario:</label>
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
      <button type="submit">entrar</button>
    </form>
  );
}

export default LoginForm;
