// import '../common/template/dependecies'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
// import Routes from './routes'
import Messages from '../common/msg/messages'

export default props => (
    <div className='wrapper'>
        {/* <h1>App</h1> */}
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            {props.children}
            {/* <Routes /> */}
        </div>
        <Footer />
        <Messages />
    </div>
)