import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddUser } from './Components/AddUser';
import { MainNav } from './Navbar/MainNav';
import { Home } from './Components/Home';
import { List } from './Components/List';
import { FindUser } from './Components/FindUser';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/list" element={<List />} />
          <Route path="/find" element={<FindUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
