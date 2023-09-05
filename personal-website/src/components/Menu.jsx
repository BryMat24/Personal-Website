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
