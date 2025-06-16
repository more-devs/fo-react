import { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

function PersonaList() {
    const [personas, setPersonas] = useState([]);

    const getPersonas = async () => {
        const res = await axios.get(`${API}/personas`);
        setPersonas(res.data);
    };

    const eliminarPersona = async (id) => {
        await axios.delete(`${API}/personas/${id}`);
        getPersonas();
    };

    useEffect(() => {
        getPersonas();
    }, []);

    return (
        <ul>
            {personas.map((p) => (
                <li key={p.id}>
                    {p.nombre} - {p.edad} años
                    <button onClick={() => eliminarPersona(p.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default PersonaList;
