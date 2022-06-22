import './App.css';
import { Nav } from './Components/Nav';
import {Home} from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
         <Routes>
            <Route forceRefresh={true} exact path="/" element={<Home />}/>
         </Routes>
      </Router>
  );
}

export default App;
