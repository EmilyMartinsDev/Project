// app/fonts.ts
import { Catamaran } from 'next/font/google'

const catamaran = Catamaran({
  subsets: ['latin'],
  variable: '--font-catamaran',
})

export const fonts = {
    catamaran,
}