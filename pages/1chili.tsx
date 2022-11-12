import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function OneChili() {
  const { data, error } = useSWR('/api/staticdata?file=1chili', fetcher);
  let card;
  if (error) {
    card = 'Oh... what an imbarassing error!'
  } else if (!data) {
    card = ''
  } else {
    const parsedData = JSON.parse(data)
    card = parsedData[Math.floor(Math.random() * parsedData.length)]
  }
  return (
    <div className='main'>
      <div style={{textAlign: 'center'}}>
        <Image src="/imgs/1chili.png" alt="One chili" width={40} height={85} />
        <p className='title' style={{ color: '#76C42B' }}>1 Chili</p>
      </div>
      <div className='card'>
        {card}
      </div>
      <Link href="/select">
        <button style={{ backgroundColor: '#76C42B' }}>
          Next card
        </button>
      </Link>
    </div>
  )
}
