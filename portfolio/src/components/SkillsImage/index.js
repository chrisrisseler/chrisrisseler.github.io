import React from "react";

function Image({ image, title }) {
    return (
        // <div classname="skillsDiv" >
        <img src={image} alt={title} classname="skillsImg" style={{
            height: "100px",
            marginRight: "5px",
            marginBottom: "5px"
        }} ></ img>
        // </div>
    )
}

export default Image