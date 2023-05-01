import React, { useEffect, useState } from "react";
import "./KnowTotalPlayer.css";
const KnowTotalPlayer = () => {
  const [totalPlayer, setTotalPlayer] = useState(0);
  const [pickPlayer, setPickPlayer] = useState(0);
  const [totalTeams, setTotalTeams] = useState(0);
  const incrementTotalPlayer = () => {
    setTotalPlayer(totalPlayer + 1);
  };
  const decrementTotalPlayer = () => {
    if (totalPlayer > 0) {
      setTotalPlayer(totalPlayer - 1);
    }
  };

  const incrementPickPlayer = () => {
    setPickPlayer(pickPlayer + 1);
  };

  const decrementPickPlayer = () => {
    if (pickPlayer > 0) {
      setPickPlayer(pickPlayer - 1);
    }
  };

  const getFactorail = (num) => {
    let res = 1;
    while (num > 1) {
      res *= num;
      num -= 1;
    }
    return res;
  };

  const getResult = () => {
    let upper = getFactorail(totalPlayer);
    let lower =
      getFactorail(pickPlayer) * getFactorail(totalPlayer - pickPlayer);
    let ans = upper / lower;
    console.log("ans is", ans);
    setTotalTeams(ans);
  };

  useEffect(() => {
    if (pickPlayer === 0 || totalPlayer === 0) return;
    if (pickPlayer > totalPlayer) return;
    getResult();
  }, [totalPlayer, pickPlayer]);
  return (
    <div>
      <div>
        <h3>Total Players:</h3>
        <div>
          <button onClick={decrementTotalPlayer}>-</button>
          {totalPlayer}
          <button onClick={incrementTotalPlayer}>+</button>
        </div>
      </div>
      <div>
        <h3>Pick Players:</h3>
        <div>
          <button onClick={decrementPickPlayer}>-</button>
          {pickPlayer}
          <button onClick={incrementPickPlayer}>+</button>
        </div>
      </div>
      {totalTeams > 0 &&
        totalPlayer >= pickPlayer &&
        pickPlayer > 0 &&
        totalPlayer > 0 && (
          <h2>Total Teams can be made is: {" " + totalTeams}</h2>
        )}
    </div>
  );
};

export default KnowTotalPlayer;
