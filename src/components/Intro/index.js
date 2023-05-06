import styles from "./intro.module.css"

const Intro = () =>
    <hgroup className={styles["hgroup"]}>
      <h1 className={styles["h1"]}>
        Hello, I'm <strong>Roberto</strong>!
      </h1>
      <h2 className={styles["h2"]}>
        Artificial intelligence, programming, and other musings.
      </h2>
    </hgroup>

export default Intro
