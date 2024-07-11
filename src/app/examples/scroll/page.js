import dynamic from "next/dynamic";
import styles from "./page.module.css";

const Scene = dynamic(() => import("@/components/animatedScroll/Scene"), {
  ssr: false,
});

export default function Scroll() {
  return (
    <section className={styles.pageSection}>
      <Scene />
    </section>
  );
}
