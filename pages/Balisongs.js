import Link from 'next/link';
import Layout from '../componets/layout'
import styles from '../styles/list.module.scss'
const squid = require('./makerlist/squid')

export default function Balisongs() {
    return(
        <Layout>
                <h1 className={styles.title} >Balisongs by Maker</h1>

                <ul className={styles.linklist}>
                    <li className={styles.new}>
                        <Link href='./makerlist/squid'>
                            <a className={styles.textsize} >Squid Industries</a>
                        </Link>
                    </li>
                </ul>
        </Layout>
 
    )
}
