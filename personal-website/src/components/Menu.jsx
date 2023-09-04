import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            <section id="menu">
                <div
                    className={`hamburger-menu ${isOpen ? "active" : ""}`}
                    onClick={toggleOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`sidebar ${isOpen ? "active" : ""}`}>
                    <Link to={"/"} className="links">
                        Home
                    </Link>
                    <Link to={"/account"} className="links">
                        About
                    </Link>
                    <Link to={"/portfolio"} className="links">
                        Portfolio
                    </Link>
                </div>
                <div
                    className={`overlay ${isOpen ? "active" : ""}`}
                    onClick={() => {
                        if (isOpen) {
                            toggleOpen();
                        }
                    }}
                ></div>
            </section>
        </>
    );
};

export default Menu;
