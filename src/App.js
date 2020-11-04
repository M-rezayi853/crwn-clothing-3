import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SingInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


const App = props => {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = useRef(null);

  useEffect (() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
      // setCurrentUser(user);
      // createUserProfileDocument(user);

      // console.log(user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }

      return unsubscribeFromAuth;
    })
  }, []);

  useEffect (() => {
    console.log(currentUser);
  }, [currentUser])

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
