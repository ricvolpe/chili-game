import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ThreeChilies() {
  const { data, error } = useSWR('/api/staticdata?file=3chilies', fetcher);

  if (error || !data) {
    return null
  }
  const parsedData = JSON.parse(data)
  const card = parsedData[Math.floor(Math.random() * parsedData.length)]
  
  return (
    <div className='main'>
      <Image src="/imgs/3chillies.png" alt="Three chillies" width={85} height={85} />
      <p className='title' style={{color: '#EC174C'}}>
        3 Chilies
      </p>
      <div className='card'>
        {card}
      </div>
      <Link href="/select">
        <button style={{backgroundColor: '#EC174C'}}>
          Next card
        </button>
      </Link>
    </div>
  )
}
