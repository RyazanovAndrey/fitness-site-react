import Logo from '@/assets/Logo.png'
import Button from './Button'
import CustomLink from './CustomLink'
import { type SectionId, navLinks } from "@/types/type"
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

const Header = () => {

  const [isActive, setIsActive] = useState<SectionId | any>('#home')
  const [bgHeaderLine, setBgHeaderLine] = useState<boolean>(false)

  const activeLink = (): void => {
    document.querySelectorAll('section').forEach(item => {
      if (window.scrollY >= item.offsetTop - 100) {
        setIsActive(`#${item.id}`)
      }
    })
  }

  const bgHeader = (): void => {
    setBgHeaderLine(window.scrollY >= 50)
  }

  const onScroll = (): void => {
    activeLink()
    bgHeader()
  }

  useEffect(() => {

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }

  }, [])


  return (
    <header className={`fixed w-full py-3 z-50 ${bgHeaderLine ? 'bg-[#FEE0DE]' : ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3">
        <img src={Logo} alt="Logo" />
        <div className="hidden lg:block">
          <div className="space-x-20">
            {navLinks.map(item => {
              return <CustomLink section={item.href} activeSection={isActive}>{item.title}</CustomLink>
            })}
          </div>
        </div>
        <div className="lg:hidden">
          <Menu size={36} color='#fd6b66' />
        </div>
        <div className="flex gap-x-3 items-center">
          <a href="">Sign in</a>
          <Button to='#home' variant='button' btnStyle='bg-main p-3 rounded-md cursor-pointer text-white'>Become a Member</Button>
        </div>
      </div>
    </header>
  )
}

export default Header