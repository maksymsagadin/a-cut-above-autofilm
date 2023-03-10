import { Link as LinkScroll, animateScroll } from 'react-scroll'
import { useRouter } from 'next/router'

const ScrollLink = ({ to, offset = -15, smooth = true, children }) => {
    const router = useRouter()

    const handleClick = (event) => {
        event.preventDefault()
        

        if (router.pathname !== '/') {
            router.push('/', undefined, {shallow:true })
            setTimeout(() => {
                console.log('scrolling')
                animateScroll.scrollTo(document.querySelector(to), {
                    duration: 500,
                    smooth,
                    offset
                })
            }, 3000)
            
        } else {
            animateScroll.scrollTo(document.querySelector(to), {
                duration: 500,
                smooth,
                offset
            })
        }
    }

    return (
        <LinkScroll to={to} offset={offset} smooth={smooth} onClick={handleClick}>
            {children}
        </LinkScroll>
    )
}

export default ScrollLink