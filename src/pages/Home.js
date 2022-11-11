import React from 'react'
import Header from '../composant/Header/Header'
import Content from '../composant/Content/Accueil/Content_Accueil'
import Footer from '../composant/Footer/Footer'
import styles from './App.module.scss'

function Home() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
export default Home
