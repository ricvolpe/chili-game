import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/foot'

export default function Home() {
  const mainImgAltText = "A green chili and a red chili getting to know each other"
  return (
    <div className='main'>
      <p className='title'>The Chili Game</p>
      <p className='quote' style={{ color: '#EC174C' }}>
        On November 12th 2025, The Chili Game will move to{' '}
        <a
          href="https://chili-game.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', color: '#EC174C' }}
        >
          https://chili-game.vercel.app
        </a>{' '}
        (because custom domains cost money and not very many players are financially supporting the game)
        Bookmark the new link if you want to keep playing :)
      </p>
      <p className='quote'>Leave behind bland small talk and spicy up getting to know each other</p>
      <Image src="/imgs/main.png" alt={mainImgAltText} width={380} height={380} />
      <div>
        <Link href="/how">
          <button style={{ backgroundColor: '#76C42B', marginRight: '10px' }}>How to play</button>
        </Link>
        <Link href="/select">
          <button>Play</button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}
