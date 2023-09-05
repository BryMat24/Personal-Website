import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!isOpen);
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
                <Link to={"/"} className="links" id="links">
                    &lt;Home /&gt;
                </Link>
                <Link to={"/about"} className="links" id="links">
                    &lt;About /&gt;
                </Link>
                <Link to={"/portfolio"} className="links" id="links">
                    &lt;Portfolio /&gt;
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
        </div>
    );
};

export default Menu;
