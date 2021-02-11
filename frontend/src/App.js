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
import PetProfile from "./components/PetProfile/PetProfile";
import PetHealth from "./components/PetHealth/PetHealth";
import PetGrowth from "./components/PetGrowth/PetGrowth";
import Appointments from "./components/Appointments/Appointments";
import Milestones from "./components/Milestones/Milestones";

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
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/pets/:petId">
            <PetProfile />
          </Route>
          <Route path="/pets/:petId/health">
            <PetHealth />
          </Route>
          <Route path="/pets/:petId/growth">
            <PetGrowth />
          </Route>
          <Route path="/pets/:petId/appointments">
            <Appointments />
          </Route>
          <Route path="/pets/:petId/events">
            <Milestones />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
