import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Posts from './pages/Posts';
import About from './pages/About';
import UserPage from './pages/UserPage';

function App() {
  return (
  <div className='px-5'>  
      <Header /> 
      <Routes>
        <Route path='*' element={<Posts />} />
        <Route path="about" element={<About />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
 </div>
  );
}

export default App;
