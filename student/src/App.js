import logo from './logo.svg';
import './App.css';
import { Survey } from './components/Survey';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import { Display } from './components/Displaydetails';
import { Dsiplayy } from './components/Details';
import { Student } from './components/Homepage';
import { Intro } from './components/Home';
import { useState } from 'react';
import { Welcome } from './Welcomepage';
function App() {

  const[sname, setSname]=useState();
  const[roll,setsRoll]=useState();
  const[dept,setsDept]=useState();
  const[blockname,setSblock]=useState();
  const[parento,setSparent]=useState();
  const[mail,setsmail]=useState();

  

  const setsname=(nameefe)=>{
    setSname(nameefe);

  };
  const setsroll=(rolli)=>{
    setsRoll(rolli);

  };

  const setsblock=(sblock)=>{
    setSblock(sblock);
  }
  const setsdept=(deptn)=>{
    setsDept(deptn);
  };

  const setsparent=(spare)=>{
    setSparent(spare);
  };
  const setSmail=(maill)=>{
    setsmail(maill);
  }



  return <BrowserRouter>

  <Routes>
    <Route exact path ="/" element={<Intro/>}/>
    <Route exact path="/registration" element={<Student/>} />
    <Route exact path='/surveypage' element={<Survey/>}/>
    <Route exact path='/login' element={<Intro/>}/>
    <Route exact path='/Welcome' element={<Welcome/>}/>
    <Route  exact path='/' element={<Survey setsname={setsname} setsroll={setsroll} setsdept={setsdept} setsblock={setsblock}  setsparent={setsparent} setSmail={setSmail}/> }/>
    <Route exact path='/display' element={<Display name={sname}/>}/>
    <Route exact path='showdetails' element={<Dsiplayy name={sname} roll={roll} blockname={blockname}  paren={parento} mail={mail}/>}/>
  </Routes>
  </BrowserRouter>
    
}

export default App;
