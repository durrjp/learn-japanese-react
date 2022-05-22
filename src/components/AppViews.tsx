import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Translate from "./Translate/Translate"

export default function AppViews() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<Translate />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}