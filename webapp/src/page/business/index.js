import React from "react";
import "./index.scss";
import bg from "./assets/1.png";

import Header from "appSrc/component/header";

function Business(props) {
    return (
        <div className="business-wrap">
            <Header />
            <div className="section-box">
                <div className="section-item bgc">
                    <div className="content-box">
                        <h5 className="title">一站式芯片定制服务</h5>
                        <h5>具有芯片定制设计与量产服务能力和IP授权</h5>
                    </div>
                    <img alt="" src={bg} />
                </div>
                <div className="section-item">

                </div>
            </div>
        </div>
    );
}

export default Business;

