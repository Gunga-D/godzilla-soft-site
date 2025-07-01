import Link from 'next/link'
import "./not-found-style.css"
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="NotFoundContainer">
      <div className="NotFoundTextContent">
        <h1 className="NotFoundCode">404</h1>
        <h2 className="NotFoundTitle">Страница не найдена</h2>
        <p className="NotFoundDescription">
          Возможно, она была перемещена, или вы просто неверно указали адрес страницы
        </p>
        <Link className="NotFoundButton" href={"/"}>
          На главную
        </Link>
      </div>
    </div>
  )
}