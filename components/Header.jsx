import { useState } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import {Link as LinkScroll} from 'react-scroll'
import { CgMenuRight } from 'react-icons/cg'
import MobileMenu from './MobileMenu'

const classNames = {
    navContainer: 'absolute top-0 left-0 flex items-center justify-between w-full py-2 px-4 md:px-6 md:bg-black/25 lg:px-8',
    closeButton: 'absolute top-8 right-3 cursor-pointer text-4xl',
    listItem: 'text-lg p-1 md:text-2xl md:p-4 transition duration-500 transform lg:hover:translate-y-2  lg:hover:text-blue-300',
}

const Header = ({ logoURL }) => {
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu)
    }

    return (
        <nav className='container top-0'>
            <div className={classNames.navContainer}>
                {/* Left Section */}
                <nav>
                    <Link href='/' passHref>
                        <span className='cursor-pointer duration-500 ease-linear hover:translate-x-4'>
                            <Image src={logoURL} alt='A Cut Above Logo' height={64} width={64} priority />
                        </span>
                    </Link>
                </nav>
                {/* Right Section */}
                <div className="md:hidden">
                    <CgMenuRight className="cursor-pointer text-4xl" onClick={toggleMenu} />
                </div>
                {/* Mobile Menu */}
                <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
                {/* Desktop Navbar */}
                <ul className='hidden md:flex text-shadow text-gray-200 font-bold cursor-pointer'>
                    {/* If Home Page */}
                    {router.pathname === '/' && 
                    <>
                        <li className={classNames.listItem}>
                            <LinkScroll to='services' offset={-15} smooth='true'>Services</LinkScroll>
                        </li>
                        <li className={classNames.listItem}>
                            <LinkScroll to='findus' offset={-15} smooth='true'>Find Us</LinkScroll>
                        </li>
                        <li className={classNames.listItem}>
                            <LinkScroll to='about' offset={-15} smooth='true'>About</LinkScroll>
                         </li>
                    </>}
                    {/* If Not Home */}
                    {router.pathname !== '/' && 
                    <>
                        <li className={classNames.listItem}>
                            <Link href='/#services' passHref>Services</Link>
                        </li>
                        <li className={classNames.listItem}>
                            <Link href='/#findus' passHref>Find Us</Link>
                        </li>
                        <li className={classNames.listItem}>
                            <Link href='/#about' passHref>About</Link>
                         </li>
                        <li className={classNames.listItem}>
                            <Link href='/' passHref>Home</Link>
                        </li>
                    </>}
                    {/* If not on blog page */}
                    {router.pathname !== '/blog' && 
                        <li className={classNames.listItem}>
                            <Link href='/blog' passHref>Blog</Link>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Header
