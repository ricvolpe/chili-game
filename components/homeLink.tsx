import Link from 'next/link'

export default function HomeLink() {
    return (
        <Link href="/" style={{ textDecoration: 'none' }}>
            <p className='title' style={{ fontSize: '26px', WebkitTextStroke: '1px black' }}>
                The Chili Game
            </p>
        </Link>
    )
}