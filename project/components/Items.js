import React from "react"

export default function Header(props) {
    return(
        <div className="card">
            <img className="card--img" src={props.imageUrl} />
            <div className="card--stats">
                <div className="card--location">
                    <img src="../images/location.png" className="card--location-icon" />
                    <span>{props.location}</span>
                    <span><a className="links" href={props.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <h1>{props.title}</h1>
                <h5 className="bold">{props.startDate} - {props.endDate}</h5>
                <p>{props.description}</p>
            </div>
            <hr />
        </div>
    )    
}