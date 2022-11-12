import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Yogurt() {
  const { data, error } = useSWR('/api/staticdata?file=yogurt', fetcher);
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
      <div style={{ textAlign: 'center' }}>
        <Image src="/imgs/yogurt.png" alt="Yogurt pot" width={200} height={140} />
        <p className='title' style={{ color: '#06B6CC' }}>
          Yogurt
        </p>
      </div>
      <div className='card'>
        {card}
      </div>
      <Link href="/select">
        <button style={{ backgroundColor: '#06B6CC' }}>
          Next card
        </button>
      </Link>
    </div>
  )
}
