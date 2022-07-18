import Icons from "./Icons";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Word Race</div>
        <div className={styles.contact}>
          By: Mritunjay Kalyan: +918877887781
        </div>
        <Icons />
      </div>
    </div>
  );
};
export default Header;
