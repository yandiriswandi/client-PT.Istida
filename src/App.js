import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import { Route, Routes, useNavigate} from 'react-router-dom'


function App() {
  
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>

  );
}

export default App;
