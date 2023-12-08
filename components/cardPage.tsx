import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import HomeLink from './homeLink'
import Footer from '../components/foot'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CardPage(props: {
  color: string,
  fileName: string,
  imgA11YLabel: string,
  imgHeight: number
  imgWidth: number,
  path: string,
  title: string,
}) {
  const { color, fileName, imgA11YLabel, imgHeight, imgWidth, path, title } = props;
  const { data, error } = useSWR(`/api/staticdata?file=${fileName}`, fetcher);
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
      <HomeLink />
      <div style={{ textAlign: 'center' }}>
        <Image src={`/imgs/${path}.png`} alt={imgA11YLabel} width={imgWidth} height={imgHeight} />
        <p className='title' style={{ color: color }}>{title}</p>
      </div>
      <div className='card quote'>
        {card}
      </div>
      <div>
        <Link href={`/${path}`}>
          <button style={{ backgroundColor: color, marginRight: '10px' }}>
            More {title}
          </button>
        </Link>
        <Link href="/select">
          <button style={{ backgroundColor: color }}>
            Change Spice
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}