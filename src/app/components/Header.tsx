import instagramImg from '../../../public/instagram.svg'
import linkedinImg from '../../../public/linkedin.svg'
import githubImg from '../../../public/github.svg'
import Link from 'next/link'
import Image from 'next/image'
import gmailImg from '../../../public/gmail.svg'
const Header = () => {
    return (
        <header className='flex flex-start'>
            <Link className='mx-4 mt-3 hover:scale-105 transition ease-in-out' href={"mailto:yaroslav1598753@gmail.com"} > <Image height={40} src={gmailImg} alt='gmail'/></Link>
            <Link className='mx-4 mt-3 hover:scale-105 transition ease-in-out'  href={'https://www.instagram.com/yaroslavsf/'} ><Image height={40}  src={instagramImg} alt='insta'/></Link>
            <Link className='mx-4 mt-3 hover:scale-105 transition ease-in-out' href={'https://www.linkedin.com/in/yaroslav-zhyvotovskyi-8857b1210/?originalSubdomain=ua'} ><Image height={40} src={linkedinImg} alt='linkd'/></Link>
            <Link className='mx-4 mt-3 hover:scale-105 transition ease-in-out'  href={'https://github.com/yaroslavsf?tab=repositories'} > <Image height={40} src={githubImg} alt='github'/></Link>
        </header>
    )
}

export default Header;