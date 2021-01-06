import React from "react";
import "./index.scss";
import { withRouter } from "react-router";
import logo from "./logo.png";

function Header(props) {
    return (
        <div className="header">
            <div>
                <span className="logo" onClick={() => props.history.push('/home')}>
                    <img alt='logo' src={logo} />
                </span>
                <span className="menu-box">
                    <span className="menu-item" onClick={() => props.history.push('/business')}>核心业务</span>
                    <span className="menu-item" onClick={() => props.history.push('/aboutus')}>关于我们</span>
                </span>
            </div>
        </div>
    );
}

export default withRouter(Header);

