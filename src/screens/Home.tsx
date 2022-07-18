import React from "react";

import Stack from "../components/Stack";
import KeyBoard from "../components/KeyBoard";
import styles from "./Home.module.css";
import { PropsHome } from "../model";
import { useAppSelector } from "../hooks/customHooks";
import Score from "../components/Score";
import Over from "../components/Over";

const Home: React.FC<PropsHome> = ({ stack, s }) => {
  const store = useAppSelector((state) => state);
  return (
    <>
      {store.gameOn && (
        <div className={styles.game}>
          <Score />
          <Stack stack={stack} />
          <KeyBoard str={s} />
        </div>
      )}
      {!store.gameOn && <Over />}
    </>
  );
};
export default Home;
