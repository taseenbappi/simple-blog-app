import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import PostDetails from './Pages/PostDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/post-details' element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
