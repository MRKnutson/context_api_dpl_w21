import Context from './components/Context';
import './App.css';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Context/>}/>
    </Routes>
  );
};

export default App;
