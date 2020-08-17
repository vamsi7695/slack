import React from "react";
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useStateValue } from "./StateProvider";


function App() {

  const [{ user }, dispatch] = useStateValue();
   
  return (
    <div className="app">
  
      <Router>
        {!user ? (
          <Login />
        ):(
          <>
          <Header />

          <div className="app--body">

            {/* Sidebar */}
            <Sidebar />

            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1>Welcome</h1>
              </Route>
            </Switch>

            {/* React-router --> chat screen */}

          </div>
        </>
      )}
      </Router>

    </div>
  );
}

export default App;
