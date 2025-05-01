import {Galada, Nunito_Sans, Inter, Sora, Playball} from "next/font/google";

export const galada = Galada({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
})

export const nunito_sans = Nunito_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '700']
})

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    style: ['normal', 'italic'],
})

export const sora = Sora({
    subsets: ['latin'],
    display: 'swap',
    weight: ['500'],
})

export const playball = Playball({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
})