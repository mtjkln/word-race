import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./ScoreBoard.module.css";

const ScoreBoard: React.FC = () => {
  const [scoreBoard, setScoreBoard] = useState<any>({});
  const [status, setStatus] = useState<Boolean>(false);
  const [scoreArray, setScoreArray] = useState<number[]>([]);

  useEffect(() => {
    axios
      .get("https://word-race-614b2-default-rtdb.firebaseio.com/data.json")
      .then((res) => {
        if (res.status === 200) setScoreBoard(res.data);
        setStatus(true);
      })
      .catch(() => setStatus(false));
  }, []);
  useEffect(() => {
    let arr: number[] = [];
    Object.keys(scoreBoard).map((item) => arr.push(scoreBoard[item].score));
    setScoreArray(arr);
    setScoreArray((arr) => arr.sort((a, b) => b - a));
    setScoreArray((arr) => arr.slice(0, 11));
    setScoreArray((arr) => [...new Set(arr)]);
  }, [status, scoreArray, scoreBoard]);
  return (
    <div className={styles.scoreBoard}>
      {status ? (
        <div className={styles.scoreBox}>
          <div className={styles.scoreTitle}>Top 10 Scores</div>
          <div className={styles.putScroll}>
            {scoreArray.map((item, index) => (
              <div className={styles.scoreVal} key={index}>
                {++index}. {item}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.loading}>Loading ...... </div>
      )}
    </div>
  );
};
export default ScoreBoard;
