import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { auth } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/userSlice';
import { selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged aut
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
