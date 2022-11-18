import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Ossature({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Ossature
