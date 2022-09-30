import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header';
import Footer from './pages/shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
