import { useRouter } from 'next/router'
import Link from 'next/link'
import {Link as LinkScroll} from 'react-scroll'
import { CgCloseR } from 'react-icons/cg'

const classNames = {
    menuContainer: 'flex-col flex items-center absolute top-0 right-0 left-1/3 sm:left-1/2 bg-black/30 backdrop-blur-sm rounded-bl-lg gap-8 pt-24 p-8 z-50 md:hidden',
    closeButton: 'absolute top-6 right-3 cursor-pointer text-4xl',
    listItem: 'text-lg p-1 cursor-pointer sm:text-xl sm:p-2 transition duration-300 transform active:text-yellow-400 active:translate-y-2',
}

const MobileMenu = ({ showMenu, toggleMenu }) => {
    const router = useRouter()

    return (
        <ul className={showMenu ? classNames.menuContainer : 'hidden'}>
            <CgCloseR onClick={toggleMenu} className={classNames.closeButton} />
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
            {/* IF Not Home */}
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
    )
}

export default MobileMenu