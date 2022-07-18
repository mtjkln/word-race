import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import styles from "./App.module.css";
import Header from "./components/Header";
import Home from "./screens/Home";
import { useAppSelector } from "./hooks/customHooks";
import { raceCartSliceAction } from "./store/store";
import { AppDispatch } from "./store/store";
import ScoreBoard from "./screens/ScoreBoard";
function App() {
  const store = useAppSelector((state) => state);
  useEffect(() => {
    if (store.level === 4) {
      dispatch(raceCartSliceAction.updateGameOn());
    }
  }, [store]);

  const dispatch = useDispatch<AppDispatch>();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (store.level !== 4) {
      dispatch(raceCartSliceAction.setPressedKey(event.key));
      dispatch(raceCartSliceAction.updateWord(event.key));
    } else dispatch(raceCartSliceAction.updateGameOn());
  };
  const handleKeyUp = () => {
    if (store.level !== 4) {
      dispatch(raceCartSliceAction.setPressedKey(""));

      if (store.word.length === store.stack[0].length) {
        if (store.word.toLowerCase() === store.stack[0].toLowerCase()) {
          dispatch(raceCartSliceAction.updatePoint());
          dispatch(raceCartSliceAction.updateMultiplier(true));
        } else {
          dispatch(raceCartSliceAction.updateMultiplier(false));
        }
        dispatch(raceCartSliceAction.updateStack(store.stack[0]));
        dispatch(raceCartSliceAction.updateWord(true));
      }
    }
  };

  return (
    <div
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      className={styles.mainApp}
    >
      <div>
        <Header />
        <Switch>
          <Route path="/word-race/home">
            <Home stack={store.stack} s={store.pressedKey} />
          </Route>
          <Route path="/word-race" exact>
            <Redirect to="/word-race/home" />
          </Route>
          <Route path="/word-race/score-board">
            <ScoreBoard />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
