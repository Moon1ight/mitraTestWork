import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Posts from './pages/Posts';
import About from './pages/About';
import UserPage from './pages/UserPage';

function App() {
  return (
  <div className=''>  
      <Header /> 
      <Routes>
        <Route path='*' element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserPage />} />
        {/* <Route path='/' element={<div>Not found</div>} /> */}
      </Routes>
 </div>
  );
}

export default App;
