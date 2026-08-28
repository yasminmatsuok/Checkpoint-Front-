import type { RodapeProps } from "../../types";
import styles from "./Rodape.module.css";

function Rodape({ texto }: RodapeProps) {
  return (
    <footer className={styles.footer}>
      <p className={styles.texto}>{texto}</p>
    </footer>
  );
}

export default Rodape;
