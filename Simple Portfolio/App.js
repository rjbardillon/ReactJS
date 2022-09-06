import React from "react"
import Information from "./components/Information"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return(
        <React.Fragment>
          <Information />
          <About />
          <Interests />  
          <Footer />
        </React.Fragment>
    )
}