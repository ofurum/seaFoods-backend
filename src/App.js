import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import StoreHome from './pages/storehome/storehome.component';
import Header from './components/header/header.component';
import Signin from './pages/sign-in/sign-in.component'
import SignUp from './pages/sign-up/sign-up.component';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path = '/' component={Homepage}/>
      <Route  path = '/stallion' component={StoreHome}/>
      <Route  path = '/signin' component={Signin}/>
      <Route  path = '/signup' component={SignUp}/>
      </Switch>
    </div>
  );    
}

export default App;
