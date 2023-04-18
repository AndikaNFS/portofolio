import logo from './logo.svg';
// import './App.css';
import HomePages from './pages/HomePages';
import { BrowserRouter, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePages />
      </BrowserRouter>
    </div>
  );
}

export default App;
