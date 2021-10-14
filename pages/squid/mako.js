import Link from 'next/link';
import Layout from '/componets/layout'
import styles from '/styles/list.module.scss'
//import style from 'styles/Home.modules.css'
import style from '../../styles/wherego.module.scss'


function Mako() {
        return (
                <Layout>
                <body>
                <h1 className={style.title} >Mako Specs</h1>
                <ul className={styles.list}>
                        <li>
                                <a>Knife: Mako</a>
                        </li>
                        <li>
                                <a>Live or Trainer: Trainer</a>
                        </li>
                        <li>
                                <a>Weight: 4.27 OZ</a>
                        </li>
                        <li>
                                <a>Pivots: Washers</a>
                        </li>
                        <li>
                                <a>Handle Material: 6061 aluminum</a>
                        </li>
                        <li>
                                <a>Handle Type: Sandwich</a>
                        </li>
                        <li>
                                <Link herf='https://www.squidindustries.co/collections/all-trainers/products/mako-bottle-opener-v3'>
                                        <a>Click here to buy it</a>
                                </Link>
                        </li>
                </ul>
                </body>
                </Layout>
      
     )
}
export default Mako
