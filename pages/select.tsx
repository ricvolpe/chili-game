import styles from '../styles/Select.module.css'
import Image from 'next/image'
import Link from 'next/link'
import HomeLink from '../components/homeLink'

export default function Select() {
  return (
    <div className='main'>
      <HomeLink />
      <p className='title' style={{ color: '#FFDE59' }}>
        Choose a level of Spiciness
      </p>
      <div className={styles.options}>
        <Link href="/1chili">
          <Image src="/imgs/1chili.png" alt="One chili" width={40} height={85} />
        </Link>
        <Link href="/2chillies">
          <Image src="/imgs/2chillies.png" alt="Two chillies" width={65} height={85} />
        </Link>
        <Link href="/3chillies">
          <Image src="/imgs/3chillies.png" alt="Three chillies" width={85} height={85} />
        </Link>
        <Link href="/4chillies">
          <Image src="/imgs/4chillies.png" alt="Four chillies on fire" width={120} height={120} />
        </Link>
      </div>
      <p className='quote'>Or choose a yogurt question</p>
      <Link href="/yogurt">
        <Image src="/imgs/yogurt.png" alt="Yogurt pot" width={200} height={140} />
      </Link>
    </div>
  )
}
