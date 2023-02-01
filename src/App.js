import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

import Header from './components/header/index'
import Footer from './components/footer/index'
import Landing from './pages/landing'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
}

export default App;
