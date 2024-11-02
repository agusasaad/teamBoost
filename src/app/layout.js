import NavBar from '@/components/NavBar/NavBar'
import './globals.css'

export const metadata = {
  title: 'Team Boost',
  description:
    'Create beautiful and dynamic websites with TeamBoost, offering personalized services and cutting-edge solutions for high-quality web development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
