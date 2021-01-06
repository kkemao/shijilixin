import React from "react";
import "./index.scss";
import logo from "./logo.png";

function Header(props) {
    return (
        <div className="header">
            <div>
                <span className="logo">
                    <img alt='logo' src={logo} />
                </span>
                <span className="menu-box">
                    <span className="menu-item">核心业务</span>
                    <span className="menu-item">关于我们</span>
                </span>
            </div>
        </div>
    );
}

export default Header;

