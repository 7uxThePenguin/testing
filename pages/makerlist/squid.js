import Link from 'next/link';
import Layout from '/componets/layout'
import styles from '/styles/list.module.scss'
const kraken = require('../squid/kraken.js')
const Makot = require('../squid/mako.js')

export default function Squid() {
    return(
        <Layout>
        <body>
            <h1 className={styles.title} >Click a knife name to see information about it</h1>
            <ul className={styles.linklist}>
                <li className={styles.new}>
                    <Link href='../squid/kraken'>
                        <a className={styles.textsize} >Kraken</a>
                    </Link>
                </li>
                <li className={styles.new}>
                    <Link href='../squid/mako'>
                        <a className={styles.textsize} >Mako</a>
                    </Link>
                </li>
            </ul>
        </body>
        </Layout>
      

      
      
      
 
      
      
      
    )
}
