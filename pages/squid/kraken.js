import Link from 'next/link';
import Layout from '/componets/layout'
import styles from '/styles/list.module.scss'
import style from '../../styles/wherego.module.scss'


export default function Kraken() {
    return(
        
        <Layout>
        <body>
        <h1 className={style.title} >Krake Raken Specs</h1>
        <ul className={styles.list}>
            <li>
                <a>Knife: Krake Raken</a>
            </li>
            <li>
                <a>Live or Trainer: Live (can be gotten as a trainer)</a>
            </li>
            <li>
                <a>Weight: 4.33 OZ</a>
            </li>
            <li>
                <a>Pivots: Bushings</a>
            </li>
            <li>
                <a>Handle Material: 7075 high strength aluminum</a>
            </li>
            <li>
                <a>Handle Type: Channel</a>
            </li>
         </ul>
            
        
        </body>
        </Layout>
      
      
      
)
  }
