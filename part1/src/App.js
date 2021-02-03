import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje.js';


const Description = () => {
  
  return <p>Esta es la app del curso fullstack</p>

}

function App() {
  return (
    <div className="App">
      <Mensaje color = 'red' message = 'estamos trabajando' />
      <Mensaje color = 'green' message = 'en un curso de react'/>
      <Description />
    </div>
  );
}

export default App;
