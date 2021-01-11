import React from "react";
import "./index.scss";

import Header from "appSrc/component/header";
import Footer from "appSrc/component/footer";

function AboutUs(props) {
    return (
        <div className="aboutus-wrap">
            <div className="section-box">
                <Header />
                <div className="section-item bgc">
                    <div className="content-box">
                        <h5 className="title">专注于半导体芯片设计和应用方案研发</h5>
                        <h5>定制化、差异化、专业化</h5>
                    </div>
                </div>
                <div className="section-item">
                    <div className="content-detail">
                        <h5 className="title">关于我们</h5>
                        <h5>世纪励芯是一家专注于半导体芯片设计和应用解决方案研发的公司，并以此为基础，搭建贯通集成电路全产业链资源的生态平台，面向客户提供专业丰富的解决方案和一站式设计服务，可根据客户的需求量身定制全套解决方案，帮助客户快速准确地实现产品的设计及生产</h5>
                        <div className="splitbar"></div>
                        <div>
                            <h5>地址：深圳市南山区粤海街道海珠社区海德三道199号天利中央广场1407</h5>
                            <h5 style={{margin: '1vh 0'}}>电话：0755-23607360</h5>
                            <h5>商务合作：Jane.zhong@aspsilicon.com</h5>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default AboutUs;

