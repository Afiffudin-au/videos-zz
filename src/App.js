import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import PlayingVideo from './component/PlayingVideo/PlayingVideo';
import SearchVideoResult from './component/SearchVideoResult/SearchVideoResult';
import Navbar from './component/Navbar/Navbar';
function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/searchResult">
           <SearchVideoResult/>
          </Route> 
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
