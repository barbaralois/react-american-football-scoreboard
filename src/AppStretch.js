//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import Buttons from './Buttons';
import Scoreboard from './Scoreboard';
import './App.css';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHome] = useState(0);
  const [awayScore, setAway] = useState(0);

  const homeTouchdown = (event) => {
    setHome(homeScore + 7);
  };

  const awayTouchdown = (event) => {
    setAway(awayScore + 7);
  };

  const homeFieldGoal = (event) => {
    setHome(homeScore + 3);
  };

  const awayFieldGoal = (event) => {
    setAway(awayScore + 3);
  };

  return (
    <div className="container">
      <Scoreboard homeScore={homeScore} awayScore={awayScore} />
      <Buttons
        homeTouchdown={homeTouchdown}
        homeFieldGoal={homeFieldGoal}
        awayTouchdown={awayTouchdown}
        awayFieldGoal={awayFieldGoal}
      />
    </div>
  );
}

export default App;
