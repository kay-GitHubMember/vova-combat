import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.scss'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { useAuth } from '../hooks/useAuth'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  )
}

export default App
