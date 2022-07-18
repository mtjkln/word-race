import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./ScoreBoard.module.css";

const ScoreBoard: React.FC = () => {
  const [scoreBoard, setScoreBoard] = useState<any>({
    "12344": { score: 10 },
    "3456": { score: 299 },
    "2322": { score: 23 },
  });
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
    setScoreArray((arr) => arr.slice(0, 9));
    console.log(scoreArray);
  }, [status]);
  return (
    <div className={styles.scoreBoard}>
      {status ? (
        <div className={styles.scoreBox}>
          <div className={styles.scoreTitle}>Top 10 Scores</div>
          {scoreArray.map((item) => (
            <div className={styles.scoreVal} key={item}>
              {item}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.loading}>Loading ...... </div>
      )}
    </div>
  );
};
export default ScoreBoard;
