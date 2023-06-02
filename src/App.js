// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState({ home: true });

  const updateParent=(obj)=>{
    setActive(obj)
  }
 

  return (
    <div className="App">
      <Header updateParent={updateParent}/>
      <Home updateParent={updateParent} obj={active}/>
      <Footer />
    </div>
  );
}

export default App;
