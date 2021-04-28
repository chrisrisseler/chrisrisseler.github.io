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
                        <p>My name is Chris Risseler, and I am currently a teacher for Lee County Schools. I am currently enrolled in
                        the UNC boot camp to help lead myself to a more fulfilling career. I hope to be a full stack developer,
                        working on both front end and back end sides of the web.
      </p>
                        <p>I graduated from college in 2010 from Bowling Green State University. My degree is in Applied Mathematics
                        Education. My hope is that those interests and strengths will help me as a web developer.
      </p>
                    </div>

                </div>
            </section>

            <section id="contact-info">

                <h2>Contact Info</h2>

                <ul>
                    <li><strong>Email: </strong><a href="mailto:chrisrisseler43@gmail.com">chrisrisseler43@gmail.com</a></li>
                    <li><strong>Github: </strong><a href="https://github.com/chrisrisseler/">Visit my Github</a></li>
                    <li><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/chris-risseler-08a95384/">Visit my
        LinkedIn</a></li>
                    <li><strong>My Resume: </strong><a
                        href="https://docs.google.com/document/d/1-8x9droGeZO7ajDgGLbuwYjmfzToLPLRmprMmKgUemE/edit?usp=sharing">Google
        Drive to my current Resume</a></li>
                </ul>

            </section>

        </main>

    );
}

export default Home;
