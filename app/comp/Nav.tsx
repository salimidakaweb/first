"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { title } from 'process'


function Nav() {
    const pathname = usePathname()

    const NavLinks = [
        {
            href: "/",
            title: "Home"
        }, {
            href: "/Store",
            title: "Store"
        }, {
            href: "/About",
            title: "About"
        }

    ]
    return (
        <nav className='shadow p-4'>
            {
                NavLinks.map((
                    item => (
                        <Link className={`pr-2 ${pathname === item.href ? "text-blue-700 font-bold text-2xl" : ""} `}
                            key={item.href} href={item.href}>{item.title}</Link>
                    )))
            }
        </nav>
    )
}

export default Nav