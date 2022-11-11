import React from 'react'
import Header from '../composant/Header/Header'
import ContentApropos from '../composant/Content/Apropos/Content_Apropos'
import Footer from '../composant/Footer/Footer'
import styles from './App.module.scss'

function Apropos() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <ContentApropos />
      <Footer />
    </div>
  )
}

export default Apropos
