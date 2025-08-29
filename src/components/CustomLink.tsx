import type { SectionId } from "@/types/type"
import { Link } from 'react-scroll'

type Props = {
    section: SectionId,
    children: React.ReactNode,
    onClick: (SectionId: SectionId) => void,
    activeSection: SectionId | null
}

const CustomLink = ({ section, children, onClick, activeSection }: Props) => {

    const isActive = activeSection == section

    return (
        <Link to={section} onClick={() => onClick(section)} className={isActive ? 'text-red-500' : 'text-[#523A34]'}>{children}</Link>
    )
}

export default CustomLink