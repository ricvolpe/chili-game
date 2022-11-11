import Image from 'next/image'
import Link from 'next/link'

export default function OneChili() {
  return (
    <div className='main'>
      <Image src="/imgs/1chili.png" alt="One chili" width={40} height={85} />
      <p className='title' style={{color: '#76C42B'}}>
        1 Chili
      </p>
      <div className='card'>
        Card text
      </div>
      <Link href="/select">
        <button style={{backgroundColor: '#76C42B'}}>
          Next card
        </button>
      </Link>
    </div>
  )
}
