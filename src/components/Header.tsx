import Logo from '@/assets/Logo.png'
import Button from './Button'
import CustomLink from './CustomLink'
import { type SectionId, navLinks } from "@/types/type"
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

const Header = () => {

  const [isActive, setIsActive] = useState<SectionId | null>('home')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [changeColor, setChangeColor] = useState<boolean>(false)

  const handleSubmit = (sectionId: SectionId) => {
    setIsActive(sectionId)
  }

  useEffect(() => {
    
    const toggleColor = () => window.scrollY > 100 ? setChangeColor(true) : setChangeColor(false)
    window.addEventListener('scroll', toggleColor)
  
    return () => {
      window.removeEventListener('scroll', toggleColor)
    }
  }, [])
  

  return (
    <header className={`relative w-full py-3 ${changeColor ? 'bg-amber-500' : ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3">
        <img src={Logo} alt="Logo" />
        <div className="hidden lg:block">
          <div className="space-x-20">
            {navLinks.map(item => {
              return <CustomLink onClick={handleSubmit} section={item.href} activeSection={isActive}>{item.title}</CustomLink>
            })}
          </div>
        </div>
        <div className="lg:hidden">
          <Menu size={36} color='#fd6b66' />
        </div>
        <div className="flex gap-x-3 items-center">
          <a href="">Sign in</a>
          <Button to='home' variant='button' btnStyle='bg-main p-3 rounded-md cursor-pointer text-white'>Become a Member</Button>
        </div>
      </div>
    </header>
  )
}

export default Header