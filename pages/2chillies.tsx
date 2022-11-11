import Image from 'next/image'
import Link from 'next/link'

export default function TwoChillies() {
  return (
    <div className='main'>
      <Image src="/imgs/2chillies.png" alt="Two chillies" width={65} height={85} />
      <p className='title' style={{color: '#FCB038'}}>
        2 Chilies
      </p>
      <div className='card'>
        Card text
      </div>
      <Link href="/select">
        <button style={{backgroundColor: '#FCB038'}}>
          Next card
        </button>
      </Link>
    </div>
  )
}
