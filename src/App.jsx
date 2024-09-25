// react 
import { useState } from "react"
// context
import StockContext from "./context/StockContext"
import ThemeContext from "./context/ThemeContext"
// components
import Dashboard from "./components/Dashboard"
import "@fontsource/quicksand"
import './App.css'

const App = () => {

  const [darkMode , setDarkMode] = useState(false)
  const [stockSymbol , setStockSymbol] = useState("FB")

  return (
    <ThemeContext.Provider value={{darkMode , setDarkMode}}>
      <StockContext.Provider value={{stockSymbol , setStockSymbol}}>
        <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  )

}

export default App
