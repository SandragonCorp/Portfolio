import '@styles/global.css';

import Nav from "@/components/Nav"

export const metadata = {
    title: 'Sandro Mendoza Portfolio',
    description: 'My portfolio'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <main className='bg-black px-10'>
              <section className='min-h-screen'>
                <Nav />
                {children}
              </section>
            </main>
        </body>
    </html>
  )
}

export default RootLayout