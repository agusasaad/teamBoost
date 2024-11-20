import NavBar from '@/components/navBar/NavBar'
import './globals.css'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'SymbioNet',
  description:
    'Create beautiful and dynamic websites with TeamBoost, offering personalized services and cutting-edge solutions for high-quality web development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
