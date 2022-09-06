import React from "react"

export default function Information() {
    return(
        <div className="information">
            <img src="../images/profile.jpg" alt="Profile" className="profile"/>
            <h1>Romeo Jr Bardillon</h1>
            <h4>College Student</h4>
            <small>Santa Rosa, Laguna</small>
            <div>
                <a href="https://m.me/rj.bardillon" target="_blank"><button className="fa-brands fa-facebook-messenger contact-buttons"></button></a>
                <a href="https://www.linkedin.com/in/romeo-jr-b-45bb0012a/" target="_blank"><button className="fa-brands fa-linkedin-in contact-buttons"></button></a>
            </div>
        </div>
    )
}