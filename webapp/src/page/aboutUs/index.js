import React from "react";
import "./index.scss";

import Header from "appSrc/component/header";

function AboutUs(props) {
    return (
        <div className="aboutus-wrap">
            <Header />
            <div className="section-box">
                <div className="section-item bgc">
                    <div className="content-box">
                        <h5 className="title">专注于半导体芯片设计和应用方案研发</h5>
                        <h5>定制化、差异化、专业化</h5>
                    </div>
                </div>
                <div className="section-item">

                </div>
            </div>
        </div>
    );
}

export default AboutUs;

