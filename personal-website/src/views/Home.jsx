import React, { useState, useEffect, useRef } from "react";
import TRUNK from "vanta/dist/vanta.trunk.min";
import * as THREE from "three";

const Home = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                TRUNK({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    THREE: THREE,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    return (
        <div ref={myRef} id="home">
            <div className="bryan-logo">
                <div className="logo-title">
                    <div className="char">B</div>
                    <div className="char">M</div>
                </div>
            </div>
            <section className="hero">
                <div>Bryan</div>
                <div>Matthew</div>
                <div>Student / Aspiring Software Engineer</div>
                <a href="bryanCV.pdf" download className="download-cv-btn">
                    <span>Download CV</span>
                </a>
            </section>
            <div className="icons-container">
                <div>
                    <a href="https://github.com/BryMat24" alt="github-link">
                        <img src="/images/github.svg" alt="github-logo" />
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/bryan-matthew-rustardy-193533290/"
                        alt="linkedin-link"
                    >
                        <img src="/images/linkedin.svg" alt="linkedin-logo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
