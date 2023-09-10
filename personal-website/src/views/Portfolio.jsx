const Portfolio = () => {
    return (
        <div id="portfolio-page">
            <h1 className="porfolio-title">&lt;Portfolio /&gt;</h1>
            <section className="projects">
                <div className="project-wrapper">
                    <div className="project-title-tablet">
                        <span>01.</span> IMDb User
                    </div>
                    <div className="project-detail">
                        <div className="project-title">IMDb User</div>
                        <p className="project-description">
                            An extension project to the IMDb admin IMDb. The
                            IMDb User Portal is your gateway to a world of
                            cinematic wonders. Dive into a vast collection of
                            movies, explore hidden gems, watch breathtaking
                            trailers, and wield the power to shape movie
                            ratings.
                        </p>
                        <p>Technologies: React JS, express JS, mongoDB</p>
                        <div className="project-btn-wrapper">
                            <a href="https://github.com/BryMat24/IMDb-clone-client">
                                <span>VIEW CODE</span>
                            </a>
                            <a href="https://imdb-user.web.app/">
                                <span>VIEW LIVE</span>
                            </a>
                        </div>
                    </div>
                    <div className="project-image-container">
                        <img src="./images/imdb-user.png" alt="project-img" />
                        <div className="project-image-background"></div>
                    </div>
                </div>

                <div className="project-wrapper">
                    <div className="project-title-tablet">
                        <span>02.</span> IMDb Admin
                    </div>

                    <div className="project-detail">
                        <div className="project-title">IMDb Admin</div>
                        <p className="project-description">
                            An extension to the IMDb clone project. This
                            desktop-based admin portal allows admin to perform
                            CRUD (Create, Read, Update, Delete) operations for
                            movies and genre. Integrated with google charts for
                            data visualization including movie ratings,
                            movie-genre distribution and average rating per
                            genre.
                        </p>
                        <p>
                            Technologies: React JS, Redux, express JS, mongoDB
                        </p>
                        <div className="project-btn-wrapper">
                            <a href="https://github.com/BryMat24/IMDb-clone-client">
                                <span>VIEW CODE</span>
                            </a>
                            <a href="https://imdb-admin.web.app">
                                <span>VIEW LIVE</span>
                            </a>
                        </div>
                    </div>
                    <div className="project-image-container">
                        <img src="./images/test.png" alt="project-img" />
                        <div className="project-image-background"></div>
                    </div>
                </div>

                <div className="project-wrapper">
                    <div className="project-title-tablet">
                        <span>03.</span> Shoppable
                    </div>
                    <div className="project-detail">
                        <div className="project-title">Shoppable</div>
                        <p className="project-description">
                            An online shopping platform designed to deliver a
                            feature-rich and delightful online shopping journey.
                            Integration with the Midtrans payment gateway API
                            and Google Maps Geolocation and Place API, to ensure
                            a streamlined and enjoyable experience for users.
                        </p>
                        <p>
                            Technologies: Vue JS, pinia, express JS, sequelize
                        </p>
                        <div className="project-btn-wrapper">
                            <a href="https://github.com/BryMat24/ecommerce-client">
                                <span>VIEW CODE</span>
                            </a>
                            <a href="https://ecommerce-de057.web.app/">
                                <span>VIEW LIVE</span>
                            </a>
                        </div>
                    </div>
                    <div className="project-image-container">
                        <img src="./images/ecommerce.png" alt="project-img" />
                        <div className="project-image-background"></div>
                    </div>
                </div>

                <div className="project-wrapper">
                    <div className="project-title-tablet">
                        <span>04.</span> Sudoku
                    </div>
                    <div className="project-detail">
                        <div className="project-title">Sudoku</div>
                        <p className="project-description">
                            A fun classic sudoku game to challenge yourself with
                            multiple different levels. For you who enjoys
                            problem solving like I do, go give it a try !
                        </p>
                        <p className="project-description">
                            Technologies: Java
                        </p>
                        <div className="project-btn-wrapper">
                            <a href="https://github.com/BryMat24/sudoku">
                                <span>VIEW CODE</span>
                            </a>
                        </div>
                    </div>
                    <div className="project-image-container">
                        <img src="./images/sudoku.png" alt="project-img" />
                        <div className="project-image-background"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
