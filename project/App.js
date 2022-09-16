import React from "react"
import Header from "./components/Header"
import Items from "./components/Items"
import Data from "./data"

export default function App() {
    const cards = Data.map(item => {
        return(
            <Items 
                key={item.id}
                {...item}
            />        
        )
    })
    
    return(
        <div>
            <Header />
            <section>
                {cards}
            </section>
        </div>
    )
}