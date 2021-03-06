import './App.css';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search.component';
import About from './components/About.component';
import AllProduct from './components/AllProduct.component';
import PrivateArea from './components/PrivateArea.component';
import AddProgram from './components/AddProgram.component';
import Login from './components/LogIn.component';
import NavBar from './components/NavBar.component';
import Home from './components/Home.componnent';
import RegistrationComponent from './components/Registration.component';
import NewMessage from './components/NewMessage.component';
import multiSelect from './components/multiSelect';
import ProgramDetailes from './components/ProgramDetailes';
import Footer from './components/Footet.component';
import Counter from './components/Counter.component';



function App() {
  return (
    <div className="App" dir='rtl'>
      <NavBar />
      <Routes>
        <Route exact element={<About />} path="/about" />
        <Route exact element={<AllProduct />} path="/allProduct" />
        <Route exact element={<Search />} path="/search" />
        <Route exact element={<PrivateArea />} path="/privateArea" />
        <Route exact element={<AddProgram />} path="/addProgram" />
        <Route exact element={<Login />} path="/login" />
        <Route exact element={<NewMessage />} path="/newMessage" />
        <Route exact element={<RegistrationComponent />} path="/registration" />
        <Route exact element={<multiSelect />} path="/multiSelect" />
        <Route exact element={<ProgramDetailes />} path="/programDetailes" />
        <Route exact element={<Home />} path="/" />
      </Routes>     
      <Footer></Footer>   
    </div>
  );
}

export default App;
