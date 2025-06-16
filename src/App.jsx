import PersonaForm from './components/PersonaForm';
import PersonaList from './components/PersonaList';

function App() {
  return (
    <div className="App">
      <h1>CRUD de Personas</h1>
      <PersonaForm />
      <PersonaList />
    </div>
  );
}

export default App;
