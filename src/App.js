import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import Ide from './ide/Ide.js';
import C6 from './class6/C6.js';
import C7 from './class7/C7.js';
import C8 from './class8/C8.js';
import C9 from './class9/C9.js';
import C10 from './class10/C10.js';
import Navigation from "./navigation/Navigation.js";
import QuizDetails from './class6/quizdetails.js'
import CreateQuiz from './class6/createquiz.js'
import AboutUs from './aboutus/aboutus.js'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SignUpPage from './signin/Signin.js';
import { withFirebase } from './firebase/index.js';
class App extends Component {

  render(){
    return (

    <BrowserRouter>
      <Navigation/>
      
      <Switch>
      
      <Route path="/class6"  excat component={C6} />
      <Route path="/class7"  excat component={C7} />
      <Route path="/class8"  excat component={C8} />
      <Route path="/class9" excat  component={C9} />
      <Route path="/class10" excat component={C10} />
      <Route path="/signin" excat component={SignUpPage} />
      <Route path="/quiz" excat component={CreateQuiz} />
      <Route path="/about" component={AboutUs} />
      <Route path="/class/:id" excat component={QuizDetails}></Route>
        <Route exact path="/" excat component={Ide} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>    
  );
  }
  
}

export default withFirebase(App);

{/*

*/}        