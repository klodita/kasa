import React from 'react'
import Router from './Routes/Router'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.appContainer}>
      <Router />
    </div>
  )
}

export default App
