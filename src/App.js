import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DebounceThrottle from './pages/DebounceThrottle';
import Optimization from './pages/optimization';
import Table from './pages/Table';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={'/'} element={<Home/>}/>
          <Route path={'/debounce-throttle'} element={<DebounceThrottle/>}/>
          <Route path={'/optimization'} element={<Optimization/>}/>
          <Route path={'/repetitive-array-elements'} element={<Table/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
