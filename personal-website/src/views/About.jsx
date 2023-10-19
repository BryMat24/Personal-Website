import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const About = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 883 },
            items: 5,
        },
        tabletTwo: {
            breakpoint: { max: 883, min: 695 },
            items: 4,
        },
        tabletThree: {
            breakpoint: { max: 695, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    return (
        <>
            <div id="about-page">
                <section className="about-info">
                    <h1 className="about-title">&lt;About /&gt;</h1>
                    <img
                        src="images/developer.png"
                        alt="developer image"
                        className="developer-image"
                    />
                    <div className="about-description">
                        <p>
                            Hi there! I'm Bryan Matthew Rustardy, currently a
                            sophomore at Nanyang Technological University
                            majoring in Information Engineering.
                        </p>
                        <p>
                            Growing up, I always had an affinity for everything
                            tech related. As I progress through my studies, I
                            have my sights set on a career in Web development.
                            I'm excited about the opportunities this field
                            offers to make a positive impact on society and
                            contribute my skills and knowledge.
                        </p>
                        <p>
                            Thank you for visiting my portfolio. Feel free to
                            reach out if you'd like to collaborate on a project.
                        </p>
                    </div>
                    <div className="skills-list">
                        <p>Technologies I used: </p>
                        <ul>
                            <li>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                    alt="html-logo"
                                />
                                HTML
                            </li>
                            <li>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                                    alt="css-logo"
                                />
                                CSS
                            </li>
                            <li>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                                    alt="javascript-logo"
                                />
                                Javascript
                            </li>
                            <li>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                                    alt="postgre-logo"
                                />
                                PostgreSQL
                            </li>
                            <li>
                                <img
                                    src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                                    alt="express-logo"
                                />
                                Express
                            </li>
                            <li>
                                <img
                                    src="https://miro.medium.com/v2/0*rwd6KeolcXgz7zpx.png"
                                    alt="sequelize-logo"
                                />
                                Sequelize
                            </li>
                            <li>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                                    alt="react-logo"
                                />
                                React JS
                            </li>
                        </ul>
                    </div>
                    <img
                        src="/images/bryan-image.png"
                        alt="bryan image"
                        className="bryan-image"
                    />
                </section>

                <section className="techstack">
                    <Carousel
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        removeArrowOnDeviceType={[
                            "desktop",
                            "tablet",
                            "mobile",
                            "tabletTwo",
                        ]}
                    >
                        <div className="box">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                                alt="javascript-logo"
                            />
                            <p>Javascript</p>
                        </div>
                        <div className="box">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                                alt="css-logo"
                            />
                            <p>CSS</p>
                        </div>
                        <div className="box">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                alt="html-logo"
                            />
                            <p>HTML</p>
                        </div>
                        <div className="box">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                                alt="react-logo"
                            />
                            <p>React</p>
                        </div>

                        <div className="box">
                            <img
                                src="https://miro.medium.com/v2/resize:fit:400/1*0nHtg7jz-cd49KIb-Za8lg.png"
                                alt="redux-logo"
                            />
                            <p>Redux</p>
                        </div>

                        <div className="box">
                            <img
                                src="https://vuejs.org/images/logo.png"
                                alt="vue-logo"
                            />
                            <p>Vue</p>
                        </div>

                        <div className="box">
                            <img
                                src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                                alt="express-logo"
                            />
                            <p>Express</p>
                        </div>

                        <div className="box">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                                alt="postgre-logo"
                            />
                            <p>Postgresql</p>
                        </div>
                        <div className="box">
                            <img
                                src="https://miro.medium.com/v2/0*rwd6KeolcXgz7zpx.png"
                                alt="sequelize-logo"
                            />
                            <p>Sequelize</p>
                        </div>
                    </Carousel>
                </section>
            </div>
        </>
    );
};

export default About;
