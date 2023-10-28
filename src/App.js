import React from 'react'
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import FAQ from "./Components/FAQ";

export default function App(){
    return (
        <div>
            <Navbar/>
            <Main/>
            <FAQ />
            <Footer/>
        </div>
    )
}

