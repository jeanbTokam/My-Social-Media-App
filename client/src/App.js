import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Addpost from './pages/Addpost';
import Profile from './pages/Profile';

function App() {
  return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/addpost' element={<Addpost />} />
                </Routes>
            </BrowserRouter>

        </div>
  );
}

export default App;
