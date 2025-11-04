import './globals.css'
import { Playfair_Display, Rethink_Sans } from 'next/font/google'
import { ThemeProvider } from '../components/ThemeProvider'
import CustomCursor from '../components/CustomCursor'

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
      <body className="bg-[#f8f8f8] dark:bg-[#0c0c0c] transition-colors duration-300">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}