import Link from 'next/link'


function Nav() {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/store">store</Link>
        <Link href="/about">about</Link>
    </div>
  )
}

export default Nav