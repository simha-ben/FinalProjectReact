import './App.css';
// import { Switch, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search.component';
import About from './components/About.component';
import AllProduct from './components/AllProduct.component';
import PrivateArea from './components/PrivateArea.component';
import AddProgram from './components/AddProgram.component';
import Login from './components/LogIn.component';
import NavBar from './components/NavBar.component';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Search /> */}
      {/* <Router> */}
        <Routes>
        {/* <Switch> */}
        {/* <Route path="/" element={<Search/>}/>
        <Route path="saerch" element={<Search/>}/> */}

        {/* <Route exact component={ } pathname="/" /> */}
        <Route exact element={<About/>} path="/about" />
        
        <Route exact element={<AllProduct/>} path="/allProduct" />
        <Route exact element={<Search/>} path="/search" />
        <Route exact element={<PrivateArea/>} path="/privateArea" />
        <Route exact element={<AddProgram/>} path="/addProgram" />
        <Route exact element={<Login/>} path="/login" />

        </Routes>
      {/* </Router> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
