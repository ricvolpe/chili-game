import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function OneChili() {
  const { data, error } = useSWR('/api/staticdata?file=1chili', fetcher);

  if (error || !data) {
    return null
  }
  const parsedData = JSON.parse(data)
  const card = parsedData[Math.floor(Math.random() * parsedData.length)]

  return (
    <div className='main'>
      <Image src="/imgs/1chili.png" alt="One chili" width={40} height={85} />
      <p className='title' style={{color: '#76C42B'}}>
        1 Chili
      </p>
      <div className='card'>
        {card}
      </div>
      <Link href="/select">
        <button style={{backgroundColor: '#76C42B'}}>
          Next card
        </button>
      </Link>
    </div>
  )
}
