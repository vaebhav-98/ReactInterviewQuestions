import './App.css';
import { Route, Routes } from 'react-router-dom';
import Posts from './Screens/Posts';
import MyPost from './Screens/MyPost';
import MyItems from './Screens/MyItems';
import TestMyself from './Screens/TestMyself';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<MyItems />} />
        <Route path={"/posts"} element={<MyPost />} />
        <Route path={"/products"} element={<TestMyself />} />
        {/* <Route path={"/posts/:id"} element={<PostDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
