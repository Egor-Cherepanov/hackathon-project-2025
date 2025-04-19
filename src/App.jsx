import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {useState} from "react";
import {Home, Member, Favorites} from "./pages/index.js"
import {AppContext} from "./context.js"


const App = () => {
    const [store, setStore] = useState([])

    return (
        <AppContext.Provider value={{store, setStore}}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/member/:id" element={<Member/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="*" element={<h1>404 – Страница не найдена</h1>}/>
                </Routes>
            </Router>
        </AppContext.Provider>
    )
}

export default App
