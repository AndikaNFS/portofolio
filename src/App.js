import logo from './logo.svg';
import RegistrationForm from './pages/ExContact';
// import './App.css';
import HomePages from './pages/HomePages';
import { BrowserRouter, Link , Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePages />} />
          <Route path='/form' element={<RegistrationForm />} />

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
