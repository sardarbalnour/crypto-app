import styles from "./Layout.module.css";

function Layout({children}) {
  return <>
  <header className={styles.header}>
    <h1>Sardar crypto analyse app</h1>
  </header>
  {children}
  <footer className={styles.footer}>
    <p>Developed by Sardar Balnour with🤍</p>
  </footer>
  </>
}

export default Layout;
