import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <meta property="fc:frame" content="vNext" />
 <meta property="fc:frame:image" content="http://...image-question.png" />
 <meta property="fc:frame:button:1" content="Green" />
 <meta property="fc:frame:button:2" content="Purple" />
 <meta property="fc:frame:button:3" content="Red" />
 <meta property="fc:frame:button:4" content="Blue" />
    </div>
  )
}
