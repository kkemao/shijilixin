import React, { useEffect, useRef, useState } from "react";
import "./index.scss";

import Header from "appSrc/component/header";
import Footer from "appSrc/component/footer";
import bar1 from "./assets/2.png";
import bar2 from "./assets/3.png";
import banner from "./assets/banner.png";
import Test from "./test";

function Home(props) {
    const [step, setStep] = useState(0);
    const [section, setSection] = useState(-1);
    const boxDom = useRef(null);
    const isChangeSection = useRef();
    isChangeSection.current = false;
    useEffect(() => {
        setTimeout(() => {
            setSection(0);
        }, 300);
        if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }
        //其他浏览器直接绑定滚动事件
        window.onmousewheel = document.onmousewheel = scrollFunc;
        return () => {
            if (document.removeEventListener) { //火狐使用DOMMouseScroll绑定
                document.removeEventListener('DOMMouseScroll', scrollFunc, false);
            }
            document.removeEventListener('mousewheel', scrollFunc);
            window.removeEventListener('mousewheel', scrollFunc);
        }
    }, []);

    useEffect(() => {
        if (step <= -480) {
            setSection(section >= 3 ? 3 : section + 1);
            setStep(0);
            return false;
        }
        if (step >= 480) {
            setSection(section <= 0 ? 0 : section - 1);
            setStep(0);
            return false;
        }
    }, [step]);

    useEffect(() => {
        // console.log('zkf', section, boxDom.current.offsetHeight*section);
        // isChangeSection.current = true
        // boxDom.current.scrollTo({ 
        //     top: boxDom.current.offsetHeight*section, 
        //     behavior: "smooth" 
        // });

        setTimeout(() => {
            isChangeSection.current = false;
        }, 800)
    }, [section]);

    const scrollFunc = e => {
        if (isChangeSection.current === true) return;
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            changeStep(e.wheelDelta);
        } else if (e.detail) {  //Firefox滑轮事件
            changeStep(e.detail);
        }
    }
    const changeStep = (val) => {
        // console.log(value);
        // // 已经在第一页并且向上滚动时
        // if(section === 0 && val > 0)return false;
        // // 已经在最后一页并且向下滚动时
        // if(section === 3 && val < 0)return false;
        setStep(value => value + val);
    }

    return (
        <div className="homepage-wrap">
            <Header />
            <div className="section-box" ref={boxDom}>
                <div className={`section-item bgc ${section === 0 ? 'active' : 'up'}`}>
                    <span className="text1">AI Future</span>
                    {/* <span className="line-bar"></span> */}
                    <img className="line-bar" alt="" src={bar2} />
                    <span className="text2">芯世纪 智未来</span>
                    <img className="line-bar reverse" alt="" src={bar1} />
                    {/* <span className="line-bar reverse"></span> */}
                </div>
                <div className={`section-item ${section === 1 ? 'active' : section > 1 ? 'up' : 'down'}`} style={{ padding: '2vh 0' }}>
                    <div className="section-style2">
                        <div className="titlebox">
                            <h5 className="title1">Customized</h5>
                            <h5 className="title2">面向现代数字城市的AI芯片产品及解决方案提供商</h5>
                            <h5 className="title3">有效降低设计风险、缩短周期，快速实现量产</h5>
                        </div>
                        <div className="arrowbox">
                            <span className="radius">行业<br />需求</span>
                            <span className="arrow"></span>
                            <span className="radius">设计</span>
                            <span className="arrow"></span>
                            <span className="radius">晶圆<br />制造</span>
                            <span className="arrow"></span>
                            <span className="radius">封装</span>
                            <span className="arrow"></span>
                            <span className="radius">测试</span>
                            <span className="arrow"></span>
                            <span className="radius">量产</span>
                        </div>
                        <h5 className="title4">公司具备现代数字城市的深厚行业背景，具备平台化的设计环境和强大的研发能力，能够打造出极具竞争力的现代数字城市AI芯片产品。公司具备的芯片方案设计、芯片设计到晶圆制造、封装和测试、解决方案设计完整流程经验，可以有效降低设计风险，缩短设计周期，快速实现量产</h5>
                    </div>
                </div>
                <div className={`section-item ${section === 2 ? 'active' : section > 2 ? 'up' : 'down'}`}>
                    <div className="section-style2">
                        <div className="titlebox">
                            <h5 className="title1">About Us</h5>
                            <h5 className="title2">关于我们</h5>
                            <h5 className="title3"></h5>
                        </div>
                        <div className="arrowbox sw">
                            <div className="leftbox">
                                <h5 className="title4">世纪励芯是一家专注于半导体芯片设计和应用解决方案研发的公司，为客户提供专业丰富的解决方案和一站式设计服务，可根据客户的需求量身</h5>
                                <div className="bottomline"></div>
                            </div>
                            <div className="rightbox">
                                {/* <img alt="" src={banner}/> */}
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`section-item ${section === 3 ? 'active' : 'down'}`} style={{
                    justifyContent: 'flex-end',
                }}>
                    <Footer />
                </div>
            </div>
            <div className="stepBox">
                <div className="stepBg" style={{ top: `${section * 25}%` }}></div>
                {new Array(4).fill(1).map((item, index) => {
                    return <span key={index} className="stepItem" onClick={() => setSection(index)}></span>
                })}
            </div>
        </div>
    );
}

export default Home;

