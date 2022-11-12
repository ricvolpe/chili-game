import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TwoChilies() {
  const { data, error } = useSWR('/api/staticdata?file=2chilies', fetcher);
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
        <Image src="/imgs/2chillies.png" alt="Two chillies" width={65} height={85} />
        <p className='title' style={{ color: '#FCB038' }}>2 Chilies</p>
      </div>
      <div className='card'>
        {card}
      </div>
      <Link href="/select">
        <button style={{ backgroundColor: '#FCB038' }}>
          Next card
        </button>
      </Link>
    </div>
  )
}
