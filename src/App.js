import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DebounceThrottle from './pages/DebounceThrottle';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={'/'} element={<Home/>}/>
          <Route path={'/debounce-throttle'} element={<DebounceThrottle/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
