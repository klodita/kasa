import React from 'react'
import Header from '../composant/Header/Header'
import ContentErreur from '../composant/Content/Content_Erreur'
import Footer from '../composant/Footer/Footer'
import styles from './App.module.scss'

function Erreur() {
  return (
    <div>
      <div className={styles.appContainer}>
        <Header />
        <ContentErreur />
        <Footer />
      </div>
    </div>
  )
}
export default Erreur
