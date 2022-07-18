import styles from "./KeyBoard.module.css";
import { PropKeyBoards } from "../model";

const KeyBoard: React.FC<PropKeyBoards> = ({ str }) => {
  const key = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  const onKeyPress = (item: string) => {
    console.log(item);
  };
  return (
    <div className={styles.mainContainer}>
      {key.map((item, index) => (
        <div key={index}>
          {item.map((item, index) => (
            <button
              className={styles.button}
              onClick={() => {
                onKeyPress(item);
              }}
              style={{ backgroundColor: item === str ? "orange" : "white" }}
              key={index}
              disabled={true}
            >
              {item === "f" || item === "j" ? (
                <u>{item.toUpperCase()}</u>
              ) : (
                item.toUpperCase()
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
export default KeyBoard;
