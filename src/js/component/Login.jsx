import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para autenticar al usuario
    };

    return (
        <div className="container mt-4 border rounded p-4 col-4 shadow-lg">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Correo electrónico:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="nombre@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Contraseña:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
