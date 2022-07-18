import { useDispatch } from "react-redux";

import styles from "./Over.module.css";
import { useAppSelector } from "../hooks/customHooks";
import { AppDispatch } from "../store/store";
import { raceCartSliceAction } from "../store/store";

const Over: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onRestartHandler = () => {
    dispatch(raceCartSliceAction.reset());
    dispatch(raceCartSliceAction.restart());
  };
  return (
    <div className={styles.container}>
      <div className={styles.overBox}>
        <div className={styles.gameOver}>
          <div className={styles.gameOverTitle}>Game Over</div>
        </div>
        <div className={styles.score}>
          <div className={styles.scoreValue}>
            Your Score is {useAppSelector((state) => state.points)}
          </div>
          <button className={styles.resetButton} onClick={onRestartHandler}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Over;
