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
                <a href="/CV.pdf" download className="download-cv-btn">
                    Download CV
                </a>
            </section>
            <div className="icons-container">
                <div>
                    <img src="/images/github.svg" alt="github-logo" />
                </div>
                <div>
                    <img src="/images/linkedin.svg" alt="linkedin-logo" />
                </div>
            </div>
        </div>
    );
};

export default Home;
