import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, MemberPage, Favorites } from "./pages"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:id" element={<MemberPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<h1>404 – Страница не найдена</h1>} />
      </Routes>
    </Router>
  )
}

export default App
