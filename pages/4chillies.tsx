import Image from 'next/image'
import Link from 'next/link'

export default function ThreeChillies() {
  return (
    <div className='main'>
      <Image src="/imgs/4chillies.png" alt="Four chillies on fire" width={120} height={120} />
      <p className='title' style={{color: '#EC174C'}}>
        4 Chilies
      </p>
      <div className='card'>
        Card text
      </div>
      <Link href="/select">
        <button style={{backgroundColor: '#EC174C'}}>
          Next card
        </button>
      </Link>
    </div>
  )
}
