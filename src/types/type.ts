import type { JSX } from "react"

export type SectionId = '#home' | '#benefits' | '#ourclasses' | '#contacts'

export const navLinks: { href: SectionId, title: string }[] = [
    { href: '#home', title: 'Home' },
    { href: '#benefits', title: 'Benefits' },
    { href: '#ourclasses', title: 'Ourclasses' },
    { href: '#contacts', title: 'Contacts' },
]

export const sponsorImg: string[] = ['images/SponsorForbes.png', 'images/SponsorFortune.png', 'images/SponsorRedBull.png', 'images/SponsorForbes.png', 'images/SponsorFortune.png', 'images/SponsorRedBull.png']

export type IList = {
    icon?: JSX.Element,
    title: string,
    desc: string
}

export type TSlider = {
    title: string,
    description?: string,
    image: string
}
