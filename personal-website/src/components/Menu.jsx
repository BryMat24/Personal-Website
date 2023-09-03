import { useState } from "react";

const Menu = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            <section id="menu">
                <div className="hamburger-menu">
                    <input type="checkbox" onClick={toggleOpen} />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`sidebar ${isOpen ? "active" : ""}`}>
                    <a href="#">Lorem.</a>
                    <a href="#">Nesciunt!</a>
                    <a href="#">Magnam.</a>
                    <a href="#">Ipsum.</a>
                    <a href="#">Voluptatem.</a>
                    <a href="#">Quibusdam.</a>
                </div>
                <div
                    className={`overlay ${isOpen ? "active" : ""}`}
                    onClick={toggleOpen}
                ></div>
            </section>
        </>
    );
};

export default Menu;
