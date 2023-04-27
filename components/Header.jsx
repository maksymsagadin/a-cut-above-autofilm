import { useState } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import {Link as LinkScroll} from 'react-scroll'
import { CgMenuRight } from 'react-icons/cg'
import MobileMenu from './MobileMenu'

const classNames = {
    navContainer: 'absolute top-0 left-0 flex items-center justify-between w-full bg-black/30 md:backdrop-blur-sm py-2 px-4 md:px-6 lg:px-8 ',
    acaLogo: 'mt-1 cursor-pointer duration-500 ease-linear active:translate-x-4 hover:translate-x-4',
    listItem: 'text-lg p-1 md:text-2xl md:p-4 transition duration-500 transform active:text-yellow-400 active:translate-y-2 lg:hover:translate-y-2 lg:hover:text-yellow-400',
}

const Header = ({ logoURL }) => {
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()
    const isHomePage = router.pathname === '/'

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu)
    }

    return (
        <header className={`sticky top-0 z-50 ${isHomePage ? '' : 'pt-[6.5rem]'}`}>
            <nav className={classNames.navContainer} aria-label='Main navigation'>
                {/* Left Section */}
                <nav className={classNames.acaLogo} aria-label='Logo navigation. Navigate to top of Home page.'>
                    <Link href='/' passHref>
                        <Image src={logoURL} alt='A Cut Above Logo' height={64} width={64} priority />
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
                
            </nav>
        </header>
    )
}

export default Header
