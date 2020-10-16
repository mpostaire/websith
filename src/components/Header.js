import React, { useEffect, useState } from 'react';
import "./Header.css";
import logo from "../assets/logo.svg";

export default function Header() {
    // TODO make responsive for small screen width

    const [ scrollY, setScrollY ] = useState(0);

    function scrollListener() {
        setScrollY(document.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollListener);
        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    });
    
    let headerClass = scrollY < 16 ? "big" : "small";
    return (
        <header className={"Header " + headerClass}>
            <a href="/" className="Logo">
                <img src={logo} alt="Logo" />
            </a>
            <nav className="Nav">
                <a href="/">Home</a>
                <a href="/">Articles</a>
                <a href="/">About</a>
            </nav>
        </header>
    );
}
