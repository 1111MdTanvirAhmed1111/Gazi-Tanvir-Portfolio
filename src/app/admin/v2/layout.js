
import { Open_Sans, Lato } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' })

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  )
}