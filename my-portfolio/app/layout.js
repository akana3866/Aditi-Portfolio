import './globals.css'
import { Playfair_Display, Rethink_Sans } from 'next/font/google'

export const metadata = {
  title: 'Aditi Kanaujia - Portfolio',
  description: 'Product Designer Portfolio',
}

// Load fonts using Next.js font optimization
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

const rethink = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rethink',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${rethink.variable}`}>
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}