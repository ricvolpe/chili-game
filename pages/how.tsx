import styles from '../styles/How.module.css'
import HomeLink from '../components/homeLink'
import Image from 'next/image'
import Link from 'next/link'

export default function Select() {
  return (
    <div className='main'>
      <HomeLink />
      <p className='title'>How to play</p>
      <div>
        <div className={styles.heading}>
          <Image src="/imgs/arrowBlack.png" alt="One chili" width={50} height={30} />
          <p className='subtitle'>General rules</p>
        </div>
        <ul className={styles.ruleList}>
          <li>Going around, each person selects a spicy level and then, if they feel like it, answers the question that shows up</li>
          <li>Anyone else from the table, if they feel like it, can answer the question</li>
          <li>At any time someone can interrupt with a Yogurt question to lighten the mood</li>
        </ul>
      </div>
      <div>
        <div className={styles.heading}>
          <Image src="/imgs/arrowGreen.png" alt="One chili" width={50} height={30} />
          <p style={{ color: '#76C42B' }} className='subtitle'>Easy mode</p>
          <Image src="/imgs/easy.png" alt="One chili" width={50} height={50} />
        </div>
        <ul className={styles.ruleList}>
          <li>Start with Yogurt questions</li>
          <li>Then turn up the spicy level every 2-3 rounds</li>
        </ul>
      </div>
      <div>
        <div className={styles.heading}>
          <Image src="/imgs/arrowRed.png" alt="One chili" width={50} height={30} />
          <p style={{ color: '#EC174C' }} className='subtitle'>Extra spicy mode</p>
          <Image src="/imgs/hard.png" alt="One chili" width={45} height={60} />
        </div>
        <ul className={styles.ruleList}>
          <li>A person selects a spicy level and asks the question to someone else, instead of answering it</li>
          <li>Any other person can follow-up with their own question to 'spice-up' the given answer</li>
          <li>You can also <a href='https://forms.gle/ciLvTdWzojeEHQsPA' target='_blank'>submit</a> your follow-up questions to be included in the game</li>
        </ul>
      </div>
      <Link href="/select">
        <button>Play</button>
      </Link>
    </div>
  )
}
