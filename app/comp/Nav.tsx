"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { title } from 'process'
import Cont from './Cont'


function Nav() {
    const pathname = usePathname()

    const NavLinks = [
        {
            href: "/",
            title: "Home"
        }, {
            href: "/store",
            title: "Store"
        }, {
            href: "/about",
            title: "About"
        },

    ]
    const NavBag =
    {
        href: "/cart",
        title: "cart"
    }
    return (
        <nav className='shadow p-4'>
            <Cont>
                <div className='flex justify-between items-center'>
                    <div>
                        {
                            NavLinks.map((
                                item => (
                                    <Link className={`pr-2 ${pathname === item.href ? "text-blue-700 font-bold text-2xl" : ""} `}
                                        key={item.href} href={item.href}>{item.title}</Link>
                                )))
                        }
                    </div>
                    <div>
                        <Link
                            className={`${pathname === NavBag.href ? "text-blue-700 font-bold text-2xl" : ""}`}
                            href={NavBag.href}>
                            {NavBag.title}
                        </Link>
                    </div>
                </div>
            </Cont>
        </nav>
    )
}

export default Nav