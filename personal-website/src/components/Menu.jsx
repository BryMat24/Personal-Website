import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();

    const toggleOpen = () => {
        setOpen(!isOpen);
    };

    const handleNavigate = (path) => {
        navigate(path);
        toggleOpen();
    };

    return (
        <div id="menu">
            <div
                className={`hamburger-menu ${isOpen ? "active" : ""}`}
                onClick={toggleOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`sidebar ${isOpen ? "active" : ""}`}>
                <div
                    onClick={() => handleNavigate("/")}
                    className="links"
                    id="links"
                >
                    &lt;Home /&gt;
                </div>
                <div
                    onClick={() => handleNavigate("/about")}
                    className="links"
                    id="links"
                >
                    &lt;About /&gt;
                </div>
                <div
                    onClick={() => handleNavigate("/portfolio")}
                    className="links"
                    id="links"
                >
                    &lt;Portfolio /&gt;
                </div>

                <div className="links-wrapper-tablet">
                    <div
                        onClick={() => handleNavigate("/")}
                        className="links-tablet"
                        id="links"
                    >
                        Home
                    </div>
                    <div
                        onClick={() => handleNavigate("/about")}
                        className="links-tablet"
                        id="links"
                    >
                        About
                    </div>
                    <div
                        onClick={() => handleNavigate("/portfolio")}
                        className="links-tablet"
                        id="links"
                    >
                        Portfolio
                    </div>
                    <div className="menu-social-links">
                        <div>
                            <a
                                href="https://github.com/BryMat24"
                                alt="github-link"
                            >
                                <img
                                    src="/images/github.svg"
                                    alt="github-logo"
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/bryan-rustardy-193533290/"
                                alt="linkedin-link"
                            >
                                <img
                                    src="/images/linkedin.svg"
                                    alt="linkedin-logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`overlay ${isOpen ? "active" : ""}`}
                onClick={() => {
                    if (isOpen) {
                        toggleOpen();
                    }
                }}
            ></div>
        </div>
    );
};

export default Menu;
