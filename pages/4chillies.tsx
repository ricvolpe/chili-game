import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function FourChilies() {
  const { data, error } = useSWR('/api/staticdata?file=4chilies', fetcher);
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
      <Image src="/imgs/4chillies.png" alt="Four chillies on fire" width={120} height={120} />
        <p className='title' style={{color: '#EC174C'}}>
          4 Chilies
          </p>
      </div>
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
