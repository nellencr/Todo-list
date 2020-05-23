import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './Components/TodoList';
import User from './Components/User';
import Footer from './Components/Footer';
const App=()=> {
  return ( 
    <div className = "App">
   <User />
   <TodoList/>
   <Footer/>
    </div>
  );
}




ReactDOM.render(
<App/>,
  document.getElementById('container')
);


