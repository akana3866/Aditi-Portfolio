import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import CustomCursor from '../components/CustomCursor'

export const metadata = {
  title: 'Aditi Kanaujia — Portfolio',
  description: 'Product Designer Portfolio',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/og-image.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: '/og-image.png',
  },
  openGraph: {
    title: 'Aditi Kanaujia — Portfolio',
    description: 'Product Designer Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aditi Kanaujia — Product Designer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditi Kanaujia — Portfolio',
    description: 'Product Designer Portfolio',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f8f8f8] dark:bg-[#0c0c0c] transition-colors duration-300">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}