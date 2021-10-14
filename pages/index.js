import Head from 'next/head'
import Footer from '../componets/layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../styles/list.module.scss'
import Link from 'next/link';
const Balisong = require('./Balisongs')
const Androidapp = require('./Androidapp')


export default function Home() {
  return (
   
    <body>
      <h1>Welcome to JaCrispys Website. You can find a lot of balisong related things here</h1>
      <ul className={styles.linklist}>
        <li className={styles.new}>
          <Link href='Balisongs'>
           <a className={styles.textsize} >Balisong Specs</a>
              </Link>
          </li>
         <li className={styles.new}>
          <Link href='Androidapp'>
           <a className={styles.textsize} >Android App</a>
              </Link>
          </li>

       </ul> 
           </body>

      //<footer className={styles.footer}>
        //<a>
          //Made by JaCrispy
          
        
        //</a>
      //</footer>
         
  )
}
