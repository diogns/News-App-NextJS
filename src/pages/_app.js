import '../styles/globals.css'
import { createContext } from 'react'
const ThemeContext = createContext('dark')

export default function App({ Component, pageProps }) {
  return (
    <ThemeContext.Provider value='dark'>
      <Component {...pageProps} />
    </ThemeContext.Provider>

  )
}
