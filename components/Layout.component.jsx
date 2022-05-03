import React from 'react'
import Head from 'next/head'

import Nav from './Nav.component'
import Footer from './Footer.component'

function Layout({ children }) {
  return (
    <div className='layout'>
      <Head>
        <title>Sanity Commerce</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout