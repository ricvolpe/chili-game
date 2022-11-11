import Image from 'next/image'
import Link from 'next/link'

export default function ThreeChillies() {
  return (
    <div className='main'>
      <Image src="/elements/yogurt.png" alt="Yogurt pot" width={200} height={140} />
      <p className='title' style={{color: '#06B6CC'}}>
        Yogurt
      </p>
      <div className='card'>
        Card text
      </div>
      <Link href="/select">
        <button style={{backgroundColor: '#06B6CC'}}>
          Next card
        </button>
      </Link>
    </div>
  )
}
