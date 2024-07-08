import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../webview/About'

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<About/>} />
            <Route path="/" exact element={<About/>} />
            <Route path="/" exact element={<About/>} />
            <Route path="/" exact element={<About/>} />
        </Routes>
    )
}
