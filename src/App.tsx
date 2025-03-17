import React, { createContext, useState } from "react"
import Header from "./components/Header/Header"
import Main from "./pages/Main/Main"
import './App.css'
import { contextWrap } from "./context/themeContext"

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <contextWrap.Provider value={{isDark, toggleTheme}}>
      <div className={isDark ? 'dark' : 'light'}>
        <Header/>
        <div className="container">
          <Main/>
        </div>
      </div>
    </contextWrap.Provider>
  )
}

export default App
