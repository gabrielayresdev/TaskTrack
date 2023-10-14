import styles from "./App.module.sass";
import Authenticate from "./pages/Authenticate/Authenticate";

function App() {
  return (
    <div className={styles.app}>
      <Authenticate />
    </div>
  );
}

export default App;
