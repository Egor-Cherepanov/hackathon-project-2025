import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Home, Member, Favorites, Error } from "./pages"
import { AppContext } from "./context.js"

const App = () => {
  const [store, setStore] = useState([])

  return (
    <AppContext.Provider value={{ store, setStore }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member/:personId" element={<Member />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="*"
            element={<Error error="Такая страница не существует" />}
          />
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

export default App
