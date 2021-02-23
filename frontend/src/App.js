import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage/Homepage";
import PetProfile from "./components/PetProfile/PetProfile";
import PetHealth from "./components/PetHealth/PetHealth";
import PetGrowth from "./components/PetGrowth/PetGrowth";
import Appointments from "./components/Appointments/Appointments";
import Milestones from "./components/Milestones/Milestones";
import { SliderData } from "./components/Milestones/SliderData";

import Particles from "./components/LoginPage/Particles";
import Background from "./components/Background/Background";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);
  if (isLoaded && !sessionUser) return <LoginPage isLoaded={isLoaded} />;

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}

      {isLoaded && (
        <Switch>
          <Route exact path="/login">
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
          <Route path="/pets/:petId/appts">
            <Appointments />
          </Route>
          <Route path="/pets/:petId/events">
            <Milestones slides={SliderData} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
