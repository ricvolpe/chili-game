import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const mainImgAltText = "A green chili and a red chili getting to know each other"
  return (
    <div className='main'>
      <p className='title'>The Chili Game</p>
      <p className='paragrah'>Leave behind bland small talk and spicy up getting to know each other</p>
      <Image src="/imgs/main.png" alt={mainImgAltText} width={380} height={380} />
      <Link href="/select">
        <button>How to play</button>
      </Link>
      <Link href="/select">
        <button>Play</button>
      </Link>
    </div>
  )
}
