import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import HomeLink from './homeLink'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CardPage(props: {
  color: string,
  fileName: string,
  imgA11YLabel: string,
  imgPath: string,
  imgHeight: number
  imgWidth: number,
  title: string,
}) {
  const { color, fileName, imgA11YLabel, imgHeight, imgWidth, imgPath, title } = props;
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
        <Image src={imgPath} alt={imgA11YLabel} width={imgWidth} height={imgHeight} />
        <p className='title' style={{ color: color }}>{title}</p>
      </div>
      <div className='card'>
        {card}
      </div>
      <Link href="/select">
        <button style={{ backgroundColor: color }}>
          Next card
        </button>
      </Link>
    </div>
  )
}