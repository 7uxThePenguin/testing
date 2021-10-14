import styles from "../styles/layoutstyles.module.scss";
import Link from "next/link";




export default function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                    <Link href="/"><a className={styles.headlink}>Home</a></Link>
                
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <p className={styles.footertext}>Made by JaCrispy</p>
                    
                </footer>

                
        </>
  )
}
