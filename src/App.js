import Context from './Pages/Context';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path = '/' element = {<Home />}/>
      <Route path = '/userprofile' element = {<Context/>}/>
    </Routes>
    </>
  );
};

export default App;
