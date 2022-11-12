import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Yogurt() {
  const { data, error } = useSWR('/api/staticdata?file=yogurt', fetcher);

  if (error || !data) {
    return null
  }
  const parsedData = JSON.parse(data)
  const card = parsedData[Math.floor(Math.random() * parsedData.length)]
  
  return (
    <div className='main'>
      <Image src="/elements/yogurt.png" alt="Yogurt pot" width={200} height={140} />
      <p className='title' style={{color: '#06B6CC'}}>
        Yogurt
      </p>
      <div className='card'>
        {card}
      </div>
      <Link href="/select">
        <button style={{backgroundColor: '#06B6CC'}}>
          Next card
        </button>
      </Link>
    </div>
  )
}
