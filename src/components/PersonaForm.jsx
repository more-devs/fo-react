import { useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

function PersonaForm() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${API}/personass`, { nombre, edad });
        setNombre('');
        setEdad('');
        window.location.reload(); // para actualizar la lista
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                required
            />
            <button type="submit">Agregar</button>
        </form>
    );
}

export default PersonaForm;
