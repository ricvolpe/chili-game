import Image from 'next/image'
import Link from 'next/link'

export default function ThreeChillies() {
  return (
    <div className='main'>
      <Image src="/imgs/3chillies.png" alt="Three chillies" width={85} height={85} />
      <p className='title' style={{color: '#EC174C'}}>
        3 Chilies
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
