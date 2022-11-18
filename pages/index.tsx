import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const mainImgAltText = "A green chili and a red chili getting to know each other"
  return (
    <div className='main'>
      <p className='title'>The Chili Game</p>
      <p className='quote'>Leave behind bland small talk and spicy up getting to know each other</p>
      <Image src="/imgs/main.png" alt={mainImgAltText} width={380} height={380} />
      <div>
        <Link href="/select">
          <button style={{ backgroundColor: '#76C42B', marginRight: '10px' }}>How to play</button>
        </Link>
        <Link href="/select">
          <button>Play</button>
        </Link>
      </div>
    </div>
  )
}
