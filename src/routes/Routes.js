import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Main } from '../components/Main';
import {Header} from '../components/Header'

export const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>

        </BrowserRouter>
    </div>
  )
}
