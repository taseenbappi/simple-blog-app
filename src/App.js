import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import PostDetails from './Pages/PostDetails';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/post-details/:id' element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
