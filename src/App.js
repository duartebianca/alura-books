import './App.css';
import Logo from './components/Logo';

const optionsText= ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Logo></Logo>
       <ul className = "options">
          {optionsText.map((text) => (
            <li className='option'><p>{text}</p></li>
          ))}
       </ul>
      </header>
    </div>
  );
}

export default App;
