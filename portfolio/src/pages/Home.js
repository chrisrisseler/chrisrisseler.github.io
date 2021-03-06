import React from "react";
import data from "../components/skillsitem/index.json"
import Image from "../components/SkillsImage"
import "../App.css"

function Home() {
    return (
        <main className="container my-wrapper">

            <section id="main-bio">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2>Chris Risseler| About Me</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                        <img src="./assets/profile.jpg" align="left" alt="Your Image" id="bio-image"
                        />
                        <p>Full-Stack web developer using a mathematics background to develop a more logical experience on the web. Recently earned a certificate in full stack development from the University of North Carolina Coding Bootcamp, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. I recently worked on a team of four to develop a single-page MERN app that allows learners to play a trivia game across the web with open ended questions, using a socket based chat.
                        </p>
                        <p>I’m eager to combine my background in mathematics and education with my technical skills in order to bring about a more logical and user-friendly web experience.
                        </p>
                    </div>

                </div>
            </section>


            <section id="contact-info">

                <h2>Contact Info</h2>

                <div className="text-left">

                </div>
                <strong>Email: </strong><a href="mailto:chrisrisseler43@gmail.com">chrisrisseler43@gmail.com</a>
                <br />
                <strong>Github: </strong><a href="https://github.com/chrisrisseler/">Visit my Github</a>
                <br />
                <strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/chrisrisseler/">Visit my
                    LinkedIn</a>
                <br />
                <strong>My Resume: </strong><a
                    href="https://docs.google.com/document/d/1CRpKBo9_JATUOFJYrqilJQN46uwzVETgJjfh_ojDwm8/edit?usp=sharing">Google
                    Drive to my current Resume</a>


            </section>

            <section id="skills">
                <br />
                <h2>Skills</h2>
                <div classname="grid-area">
                    {data.map(({ image, title }) => {
                        return (<Image
                            image={image}
                            title={title}
                        />)
                    })}
                </div>
            </section>

        </main>

    );
}

export default Home;
