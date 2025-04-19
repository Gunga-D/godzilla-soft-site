import Link from 'next/link'
import "./not-found-style.css"
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='NotFoundPage'>
        <h1 className='NotFoundPageTitle'>Такой страницы не существует</h1>
        <p className='NotFoundPageDesc'>Либо ее кто-то удалил, либо в ссылке опечатка</p>
        <div className='NotFoundPageArt'>
            <Image src={"/3804926.png"} width={300} height={300} alt='NotFoundArt'></Image>
        </div>
        <div className='NotFoundReturn'>
            <Link href="/" className='NotFoundReturnBtn'>На главную</Link>
        </div>
    </div>
  )
}