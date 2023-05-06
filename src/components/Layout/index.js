import Header from "../Header";
import Footer from "../Footer"

import styles from "./layout.module.css"

const Layout = ({children}) =>
    <>
      <Header/>
      <main className={styles["main"]}>{children}</main>
      <Footer/>
    </>

export default Layout
