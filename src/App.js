import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './screens/Homescreen';
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { selectUser, login, logout} from './features/userSlice'
import ProfileScreen from './screens/ProfileScreen';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))

      } else {
        dispatch(logout());
      }
    })

    return () => {unsubscribe()};
  }, [dispatch])

  return ( 
    <div className="App">
      <Router>
        {
          !user ? (<LoginScreen />) : (
            <Switch>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
              <Route path="/">
                <Homescreen />
              </Route>
            </Switch>
          )
        }
    </Router>
    </div>
  );
}

export default App;
