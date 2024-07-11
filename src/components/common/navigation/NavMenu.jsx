import Link from "next/link";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <ul className={styles.navList}>
      <li>
        <Link href="/">Home page</Link>
      </li>
      <li>
        <Link href="/examples/scroll">Animated scroll</Link>
      </li>
      <li>
        <Link href="/examples/model1">3D model 1</Link>
      </li>
    </ul>
  );
}
