import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
  const Form=React.lazy(()=>import('./folder'));

  class App extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
        <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/" name="Home" render={props=> <Form {...props} /> }/>
            </Switch>
          </React.Suspense>
        </HashRouter>
    );
  }


}

export default App;
