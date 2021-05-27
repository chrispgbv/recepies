import React from 'react';
import './App.scss';
import TodosList from './components/TodosList';
import Logo from '../src/img/logo1.PNG'

function App() {
  return (
    
    <>
    <div className='recipe-app'>
      <p className = 'logo'> <img  src = {Logo} alt = '' width ='70px' height = '70'></img> </p>
      <TodosList/>
    </div>

    <div>
      <p className = 'center'>
      <button className='add-ingridents'>
        find recepies
      </button> 
      </p>
    </div>
    </>
  );
}

export default App;
