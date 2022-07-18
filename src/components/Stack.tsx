import { PropStack } from "../model";
import styles from "./Stack.module.css";

const Stack: React.FC<PropStack> = ({ stack }) => {
  return (
    <div className={styles.container}>
      {stack.map((item) => (
        <div className={styles.stackItem}>{item}</div>
      ))}
    </div>
  );
};

export default Stack;
