import React from 'react'
import './index.scss'
import bg from './assets/1.png'
import img1 from './assets/01.png'
import img2 from './assets/02.png'
import img3 from './assets/03.png'
import img11 from './assets/11.png'
import img12 from './assets/12.png'
import img13 from './assets/13.png'
import img14 from './assets/14.png'
import img101 from './assets/101.png'
import img102 from './assets/102.png'
import img103 from './assets/103.png'
import img104 from './assets/104.png'
import img105 from './assets/105.png'
import img106 from './assets/106.png'
import img107 from './assets/107.png'
import img108 from './assets/108.png'

import Header from 'appSrc/component/header'
import Footer from 'appSrc/component/footer'

function Business(props) {
    return (
        <div className="business-wrap">
            <div className="section-box">
                <Header />
                <div className="section-item bgc">
                    <div className="content-box">
                        <h5 className="title">一站式芯片定制服务</h5>
                        <h5>具有芯片定制设计与量产服务能力和IP授权</h5>
                    </div>
                    <img alt="" src={bg} />
                </div>
                <div className="section-item autohigh">
                    <div className="business-detail">
                        <h5 className="title">核心业务</h5>
                        <h5>提供集成电路的设计、调试、维护；集成电路设计技术服务；计算机软件的研发、设计、制作，技术转让、技术咨询和技术服务；信息系统应用管理和技术维护；信息技术服务；软件开发；数据处理、信息技术和业务流程外包技术服务；电子设备、芯片、软件的批发；货物及技术进出口业务</h5>
                        <div className="rowlayout">
                            <div className="layout-item">
                                <img alt="" src={img1} />
                                <h5 className="title">设计定制</h5>
                                <h5>专注差异化产品解决方案</h5>
                                <h5>为客户提供平台化的芯片定制方案</h5>
                                <h5>满足不同客户的芯片定制需求</h5>
                            </div>
                            <div className="layout-item">
                                <img alt="" src={img2} />
                                <h5 className="title">技术支持</h5>
                                <h5>专业的技术支持服务</h5>
                                <h5>可接受委托完成从产品导入到调试、</h5>
                                <h5>维护的全流程服务环节</h5>
                            </div>
                            <div className="layout-item">
                                <img alt="" src={img3} />
                                <h5 className="title">服务咨询</h5>
                                <h5>提供芯片、集成电路、计算机软件、</h5>
                                <h5>信息系统、数据处理、电子设备、货</h5>
                                <h5>物进出口业务等相关服务咨询</h5>
                            </div>
                        </div>
                        <h5 className="title">目标市场及应用</h5>
                        <h5>面向现代数字城市新基建的创信AI计算市场、打造支持“云、边、端”一体化协同的AI计算平台</h5>
                        <div className="rowlayout mlnf">
                            <div className="layout-item" style={{ flex: 1.665 }}>
                                <h5 className="title">端设备</h5>
                                <div className="img-box">
                                    <img alt="" src={img11} />
                                </div>
                            </div>
                            <div className="layout-item">
                                <h5 className="title">轻量级边缘</h5>
                                <div className="img-box">
                                    <img alt="" src={img12} />
                                </div>
                            </div>
                            <div className="layout-item">
                                <h5 className="title">边缘服务器</h5>
                                <div className="img-box">
                                    <img alt="" src={img13} />
                                </div>
                            </div>
                            <div className="layout-item">
                                <h5 className="title">数据中心服务器</h5>
                                <div className="img-box">
                                    <img alt="" src={img14} />
                                </div>
                            </div>
                        </div>
                        <div className="rowlayout mlnf" style={{ marginBottom: 0 }}>
                            <div className="layout-item">
                                <div className="img-box">
                                    <img alt="" src={img101} />
                                </div>
                                <h5>城市治理、泛安防领域</h5>
                            </div>
                            <div className="layout-item">
                                <div className="img-box">
                                    <img alt="" src={img103} />
                                </div>
                                <h5>多模生物识别应用领域</h5>
                            </div>
                            <div className="layout-item">
                                <div className="img-box">
                                    <img alt="" src={img103} />
                                </div>
                                <h5>智慧商业智能应用领域</h5>
                            </div>
                            <div className="layout-item">
                                <div className="img-box">
                                    <img alt="" src={img104} />
                                </div>
                                <h5>智能制造机器视觉领域</h5>
                            </div>
                        </div>
                        <div className="rowlayout mlnf" style={{ marginBottom: 0 }}>
                            <div className="layout-item">
                                <div className="img-box">
                                    <img alt="" src={img105} />
                                </div>
                                <h5>电力行业智能应用领域</h5>
                            </div>
                            <div className="layout-item">
                                <div className="img-box">
                                    <img alt="" src={img106} />
                                </div>
                                <h5>轨交行业智能应用领域</h5>
                            </div>
                            <div className="layout-item">
                                <div className="img-box">
                                    <img alt="" src={img107} />
                                </div>
                                <h5>车载视频智能应用领域</h5>
                            </div>
                            <div className="layout-item">
                                <div className="img-box">
                                    <img alt="" src={img108} />
                                </div>
                                <h5>物流仓储智能应用领域</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Business
