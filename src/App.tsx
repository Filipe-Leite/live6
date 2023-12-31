import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';  
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div>
    <header>
      <h1>Hello World</h1>
      <h1>Header do site</h1>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/Private"> Private </Link>
        {auth.user && <button onClick={handleLogout}>Sair</button>}
      </nav>
    </header>
    <hr/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/private" element={<RequireAuth><Private/></RequireAuth>}/>
    </Routes>
    </div>
  );
}

export default App;