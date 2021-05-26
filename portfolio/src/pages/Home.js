import React from "react";

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
                <strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/chris-risseler-08a95384/">Visit my
        LinkedIn</a>
                <br />
                <strong>My Resume: </strong><a
                    href="https://docs.google.com/document/d/1-8x9droGeZO7ajDgGLbuwYjmfzToLPLRmprMmKgUemE/edit?usp=sharing">Google
        Drive to my current Resume</a>


            </section>

        </main>

    );
}

export default Home;
