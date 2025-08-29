export type SectionId = 'home' | 'benefits' | 'ourclasses' | 'contacts'

export const navLinks: { href: SectionId, title: string }[] = [
    { href: 'home', title: 'Home' },
    { href: 'benefits', title: 'Benefits' },
    { href: 'ourclasses', title: 'Ourclasses' },
    { href: 'contacts', title: 'Contacts' },
]