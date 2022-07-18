import styles from "./Score.module.css";
import { useAppSelector } from "../hooks/customHooks";

const Score: React.FC = () => {
  const store = useAppSelector((state) => state);
  return (
    <div className={styles.Score}>
      <div className={styles.level}>
        <div className={styles.levelValue}>{store.level}</div>
        <div className={styles.levelText}>Level</div>
      </div>
      <div className={styles.score}>
        <div className={styles.scorevalue}>{store.points}</div>
        <div className={styles.scoreText}>score</div>
      </div>
      <div className={styles.multiplier}>
        <div className={styles.mulValue}>{store.multiplier}x</div>
      </div>
    </div>
  );
};
export default Score;
