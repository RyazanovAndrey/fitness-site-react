import Logo from '@/assets/Logo.png'
import Button from './Button'
import CustomLink from './CustomLink'
import { type SectionId, navLinks } from "@/types/type"
import { useState } from 'react'

const Header = () => {

  const [isActive, setIsActive] = useState<SectionId | null>('home')

  const handleSubmit = (sectionId: SectionId) => {
    setIsActive(sectionId)
  }

  return (
    <header className="relative w-full py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img src={Logo} alt="Logo" />
        <div className="space-x-20">
          {navLinks.map(item => {
            return <CustomLink onClick={handleSubmit} section={item.href} activeSection={isActive}>{item.title}</CustomLink>
          })}
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