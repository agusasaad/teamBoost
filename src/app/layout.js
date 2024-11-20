import './globals.css'
import NavBar from '@/components/navBar/NavBar'
import Footer from '@/components/footer/Footer'

export const metadata = {
  metadataBase: new URL('https://symbionet.vercel.app/'),
  title: 'SymbioNet. - Soluciones en Desarrollo Web, Consultoría IT y Automatización',
  description:
    'SymbioNet. ofrece desarrollo web personalizado, consultoría IT y soluciones de automatización de procesos para optimizar y transformar digitalmente tu negocio.',
  keywords:
    'SymbioNet., consultoría IT, desarrollo web, automatización de procesos, soluciones tecnológicas, optimización empresarial, infraestructura IT, transformación digital, servicios de tecnología, soporte IT, desarrollo personalizado, innovación tecnológica, eficiencia operativa',
  author: 'SymbioNet.',
  icons: {
    icon: "/symbio-favicon.svg",
  },
  openGraph: {
    title: 'SymbioNet. - Innovación en Tecnología para tu Empresa',
    description:
      'Expertos en desarrollo web, consultoría IT y automatización de procesos. Impulsamos la transformación digital de tu negocio con soluciones a medida.',
    images: '/open-graph-image.jpeg',
    url: 'https://symbionet.vercel.app/',
    type: 'website',
    site_name: 'SymbioNet.',
  },
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SymbioNet. - Soluciones Tecnológicas para el Éxito Empresarial',
    description:
      'Optimiza tu infraestructura IT, desarrolla sitios web de alto rendimiento y automatiza procesos con las soluciones personalizadas de Team Boost.',
    images: '/open-graph-image.jpeg',
  },
};


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
