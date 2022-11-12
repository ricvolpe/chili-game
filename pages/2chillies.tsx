import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TwoChilies() {
  const { data, error } = useSWR('/api/staticdata?file=2chilies', fetcher);

  if (error || !data) {
    return null
  }
  const parsedData = JSON.parse(data)
  const card = parsedData[Math.floor(Math.random() * parsedData.length)]
  
  return (
    <div className='main'>
      <Image src="/imgs/2chillies.png" alt="Two chillies" width={65} height={85} />
      <p className='title' style={{color: '#FCB038'}}>
        2 Chilies
      </p>
      <div className='card'>
        {card}
      </div>
      <Link href="/select">
        <button style={{backgroundColor: '#FCB038'}}>
          Next card
        </button>
      </Link>
    </div>
  )
}
