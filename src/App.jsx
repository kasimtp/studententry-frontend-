import Home from './pages/Home'
import Add from './components/Add'
import List from './components/List'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {
  
  return (
    // FIX: Wrap the entire routing structure inside the <Router> component.
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
   
  )
}

export default App