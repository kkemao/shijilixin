import React from 'react'
import './index.scss'
import { withRouter } from 'react-router'
import logo from 'appSrc/component/header/logo.png'

function Footer (props) {
  return (
        <div className="footer" style={props.style}>
            <div className="contentbox">
                <h5 className="title">
                    <span>联系我们</span>
                    <img alt='logo' src={logo} onClick={() => props.history.push('/home')} />
                </h5>
                <div>
                    <h5>地址：深圳市南山区粤海街道海珠社区海德三道199号天利中央广场1407</h5>
                    <h5 style={{ margin: '3vh 0' }}>电话：0755-23607360</h5>
                    <h5>商务合作：Jane.zhong@aspsilicon.com</h5>
                </div>
                <div className="line"></div>
                <div className="content-bottom">
                    <span>Copyright ©️ 2020 深圳世纪励芯微电子有限公司版权所有</span>
                    <span>粤ICP备16026973号-1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 法律声明</span>
                </div>
            </div>
        </div>
  )
}

export default withRouter(Footer)
