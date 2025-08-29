import type { SectionId } from "@/types/type"
import { Link } from 'react-scroll'

type Props = {
  children: React.ReactNode,
  to?: SectionId,
  variant: 'link' | 'button',
  btnStyle?: string
}

const Button = ({ children, to, variant, btnStyle }: Props) => {

  return variant == 'link' && to ? (
    <Link to={to} className={btnStyle}>{children}</Link>
  ) : (
    <>
      <button className={btnStyle}>{children}</button>
    </>
  )
}

export default Button