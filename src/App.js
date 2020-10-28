import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import PlayingVideo from './component/PlayingVideo/PlayingVideo';
function App() {
  return (
    <Router> 
      <div className="App">
        <Switch>
          <Route path="/playingVideo">
           <PlayingVideo/>
          </Route> 
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
