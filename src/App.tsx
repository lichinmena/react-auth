import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
function App() {


  const[name, setName] = useState('');

  useEffect(()=>{
      (
          async () => {
              const response = await fetch("http://localhost:8000/api/user", {    
                  headers: {'Content-Type':'application/json'},
                  credentials: 'include',
              });

              const content = await response.json();
              setName(content.name)

          }
      )();
  });


  return (

    <div className="App">

<BrowserRouter>
    <Nav name={name} setName={setName}/>
    


  
    <main className="form-signin">
     
        <Route path="/" exact component={() => <Home name={name}/>}/>
        <Route path="/login" component={() => <Login setName={setName}/>}/>
        <Route path="/register" component={Register}/>
  
    </main>

    </BrowserRouter>
  </div>
  );
}

export default App;
