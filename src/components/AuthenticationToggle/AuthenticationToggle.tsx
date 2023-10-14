import styles from "./AuthenticationToggle.module.sass";
import { Link } from "react-router-dom";

export interface IAuthenticationToggle {
  line: string;
  anchor: string;
  href: string;
}

export const AuthenticationToggle = ({
  line,
  anchor,
  href,
}: IAuthenticationToggle) => {
  return (
    <div className={styles.redirect}>
      <p className={styles.line}>{line}</p>
      <Link to={href} className={styles.anchor}>
        {anchor}
      </Link>
    </div>
  );
};

export default AuthenticationToggle;
