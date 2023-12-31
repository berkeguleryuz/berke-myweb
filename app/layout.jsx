import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import '@/styles/globals.css'

import { Nunito } from 'next/font/google'
 
const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Berke Guleryuz || Web Services',
  description: 'Futuristic Web Developer & Community Manager',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      <div className='maiin'>
      </div>
        <div className='container'>
          <div className='w-full min-h-screen h-full'>
            <Nav />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
