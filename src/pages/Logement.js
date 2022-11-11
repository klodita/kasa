import React from 'react'
import Header from '../composant/Header/Header'
import Content from '../composant/Content/Logement/Content_Logement'
import Footer from '../composant/Footer/Footer'
import styles from './App.module.scss'

function Location() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Location
