import { NavLink } from "react-router-dom";
import styles from "./Icons.module.css";

const Icons: React.FC = () => {
  return (
    <div className={styles.Icons}>
      <NavLink activeClassName={styles.active} to="/home">
        Home
      </NavLink>
      <NavLink activeClassName={styles.active} to="/score-board">
        Score Board
      </NavLink>
    </div>
  );
};
export default Icons;
