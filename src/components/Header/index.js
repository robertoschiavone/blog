import styles from "./header.module.css"

import Link from "next/link"
import Image from "next/image";

const Header = () =>
    <header className={styles["header"]}>
      <Link href="/">
        <Image src="/assets/blog/rocket.gif" width={32} height={32} alt="logo"/>
      </Link>
      {false &&
          <nav>
            <menu className={styles["menu"]}>
              <li>
                <Link href="/blog" className={styles["nav-link"]}>Blog</Link>
              </li>
              <li>
                <Link href="/about" className={styles["nav-link"]}>About</Link>
              </li>
            </menu>
          </nav>
      }
    </header>

export default Header
