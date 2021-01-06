import React from "react";
import "./index.scss";

import Header from "appSrc/component/header";
import bar1 from "./assets/2.png";
import bar2 from "./assets/3.png";

function Home(props) {
    return (
        <div className="homepage-wrap">
            <Header />
            <div className="section-box">
                <div className="section-item">
                    <span className="text1">AI Future</span>
                    {/* <span className="line-bar"></span> */}
                    <img className="line-bar" alt="" src={bar2} />
                    <span className="text2">芯世纪 智未来</span>
                    <img className="line-bar reverse" alt="" src={bar1} />
                    {/* <span className="line-bar reverse"></span> */}
                </div>
                <div className="section-item">

                </div>
            </div>
        </div>
    );
}

export default Home;

