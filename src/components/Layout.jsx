import Navbar from "./Navbar"
import Footer from "./Footer"
import MainContent from "./MainContent"
import { useState, useEffect } from "react"
import "../styles/layout.css"
export default function Layout({children}){
    const [page, setPage] = useState('home')


    return (
        <>
        <div className="layout_container">
            <Navbar page={page} setPage = {setPage}/>
            <MainContent>{children}</MainContent>
            <Footer />
        </div>
        </>
    )
}