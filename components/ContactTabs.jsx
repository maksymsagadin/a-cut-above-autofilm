import { FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlinePhone } from 'react-icons/hi'

const ContactTabs = ({ contact }) => {
    return (
        <div className='flex absolute flex-col bottom-[5%] left-0'>
            <ul>
            <li className='w-[160px] h-[60px] rounded-lg flex px-4 items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#5e8bf4]'>
                <a
                className='flex justify-between items-center w-full'
                href={`tel:+1-${contact.phone}`}
                >
                Phone Call <HiOutlinePhone size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] rounded-lg flex px-4 items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
                <a
                className='flex justify-between items-center w-full'
                href={`https://www.instagram.com/${contact.instagram}/`}
                target='_blank'
                rel='noopener noreferrer'
                >
                Instagram <FaInstagram size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] rounded-lg flex px-4 items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]'>
                <a
                className='flex justify-between items-center w-full'
                href={`mailto:${contact.email}`}
                target='_blank'
                rel='noopener noreferrer'
                >
                Send Email <HiOutlineMail size={30} />
                </a>
            </li>
            </ul>
        </div>
    )
}

export default ContactTabs