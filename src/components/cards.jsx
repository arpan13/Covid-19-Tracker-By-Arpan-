import React from "react"

function Card(props){
  return(
   
      <div className="card">
        <div className="card-body">
                 <img src={props.imageflag} alt="flag" className="image"></img>
                <h2>Country: {props.countryName}</h2>
                <h2>Confirmed cases: {props.confirmed}</h2>
                <h2>Recoverd Cases: {props.recoverd}</h2>
                <h2>Total Deaths :{props.deaths}</h2>
                <h2></h2>
        </div>
     </div>
  

  )
}
export default Card;