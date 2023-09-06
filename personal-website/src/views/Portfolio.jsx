const Portfolio = () => {
    return (
        <div id="portfolio-page">
            <h1 className="porfolio-title">&lt;Portfolio /&gt;</h1>
            <section className="projects">
                <div className="project-wrapper">
                    <img src="./images/shoppable.png" alt="project-img" />
                    <div className="project-description">
                        <div className="project-title">Shoppable</div>
                        <div className="project-card">
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className="project-wrapper">
                    <img src="./images/imdb-user.png" alt="project-img" />
                    <div className="project-description">
                        <div className="project-title">IMDb Clone</div>
                        <div className="project-card">
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className="project-wrapper">
                    <img src="./images/imdb-admin.png" alt="project-img" />
                    <div className="project-description">
                        <div className="project-title">IMDb Admin</div>
                        <div className="project-card">
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className="project-wrapper">
                    <img src="./images/sudoku.png" alt="project-img" />
                    <div className="project-description">
                        <div className="project-title">Sudoku</div>
                        <div className="project-card">
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
