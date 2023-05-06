import Link from "next/link"

import styles from "./notes.module.css"
import {DocumentText} from "../../icons";

const Notes = ({posts}) =>
    <section>
      {posts.map(post =>
          <Link href={`/posts/${post.slug}`} className={styles["note"]} key={post.slug}>
            <DocumentText className={styles["icon"]}/>
            <span className={styles["note-title"]}>{post.title}</span>
          </Link>
      )}
    </section>

export default Notes
