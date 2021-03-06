import React from "react";
import data from "../components/PortfolioItem/index.json"
import Card from "../components/Card"
import "../App.css"

function Portfolio() {
    return (
        <>
            <div className="container px-2 my-wrapper mt-3">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2>Chris Risseler| My Portfolio</h2>
                    </div>
                </div>

                <section>
                    <div className="grid-area">
                        {data.map(
                            ({ image, title, description, deployed, gitHub, used }) => {
                                return (<Card
                                    image={image}
                                    title={title}
                                    description={description}
                                    deployed={deployed}
                                    used={used}
                                    gitHub={gitHub}
                                    key={title}
                                />)
                            }
                        )}


                    </div>

                </section>
            </div>
        </>
    );
}

export default Portfolio;
