import React from "react";


function Card({ image, title, description, deployed, gitHub }) {
    return (
        <div className="card mr-1 mb-1">
            <img src={image} alt={title} className="card-img-top">
            </img>
            <div className="card-body" >
                <h5 className="card-title">
                    {title}
                </h5>
                <p className="card-text">
                    {description}
                </p>
                <button href={deployed} className="btn btn-warning btnPortfolio" target="_blank"><i className="fas fa-folder-open"></i>App</button>
                <button href={gitHub} className="btn btn-warning btnPortfolio rightBtn" target="_blank"><i className="fas fa-code"></i>GitHub</button>
            </div>
        </div>
    );
}

export default Card;
