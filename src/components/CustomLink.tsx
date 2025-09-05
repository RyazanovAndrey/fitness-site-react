import type { SectionId } from "@/types/type"

type Props = {
    section: SectionId,
    children: React.ReactNode,
    activeSection: SectionId | null
}

const CustomLink = ({ section, children, activeSection }: Props) => {

    const isActive = activeSection == section

    return (
        <a href={section} className={isActive ? 'text-red-500' : ''}>{children}</a>
    )
}

export default CustomLink