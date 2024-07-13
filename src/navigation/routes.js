import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../webview/About'
import Resume from '../webview/Resume'
import Portfolio from '../webview/Portfolio'
import Contact from '../webview/Contact'

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/about me" exact element={<About/>} />
            <Route path="/resume" exact element={<Resume/>} />
            <Route path="/portfolio" exact element={<Portfolio/>} />
            <Route path="/contact" exact element={<Contact/>} />
        </Routes>
    )
}
