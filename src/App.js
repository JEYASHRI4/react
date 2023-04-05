//import logo from './logo.svg';
import './App.css';
import Entry from './cc2/day6.2';
//import Listfunction from './components/day5';
//import Name from './components/day4'
//import Coffeeshop from './components/day3';
//import Day_2 from './components/day2';
//import Display from './components/day1';
import { Route,Routes } from 'react-router-dom';
import Albums from './cc2/Albums';
import Home from './cc2/Home';
import NavBar from './cc2/Navbar';
import Singers from './cc2/Singers';
import Usestates from './cc2/day8';
import AXIOS from './cc2/day7';
import List from './cc2/day6';
import Form from './cc2/day10';
function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}
function App() {
  return (

  
    <div>
    {/*<Display/>
    <Listfunction/>
    <Name/>
  <Coffeeshop/>
  <Day_2/>*/}
  <h2>DAY 6</h2>
  <h1 style={{ textAlign:"center"}}>
         Products
      </h1>
      <dl >{List.map(createEntry)}</dl>
<h2>DAY 7 </h2>
      <AXIOS></AXIOS>
   <h2>DAY 8</h2>
   <Usestates></Usestates>
<h2>DAY 9</h2>
<div>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
        </Routes>
      </div>
      <Form></Form>

  </div>

  
  );
}

export default App;
