import React from 'react';
import Displaypage from './components/Displaypage';
import Home from './components/Home';

import './App.css';
import { BrowserRouter as Router,
Route,
Routes
}from 'react-router-dom';

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Displaypage' element={<Displaypage/>}/>

          

        </Routes>
      </Router>
      
    </div>
  );
}
export default App;
