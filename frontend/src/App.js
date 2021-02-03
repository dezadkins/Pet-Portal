import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import NavBar from "./components/NavBar/NavBar";
import NavBar2 from "./components/NavBar2/NavBar2";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage/Homepage";
import ProfileButton from "./components/Navigation/ProfileButton";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/signin">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/navbar">
            <NavBar />
          </Route>
          <Route path="/navbar2">
            <NavBar2 />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/home">
            <ProfileButton />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
