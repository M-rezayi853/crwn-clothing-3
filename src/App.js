import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SingInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import './App.css';

import { auth } from './firebase/firebase.utils';


const App = props => {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect (() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);

      console.log(user);

      return unsubscribeFromAuth;
    })
  }, []);

  // useEffect(() => {
  //   console.log('will');
  //   return unsubscribeFromAuth;
  // }, []);


  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SingInAndSignUp} />
      </Switch>
    </div>
  );
};


export default App;
