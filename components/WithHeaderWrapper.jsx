import React from 'react'
import Header from './Header'
import Footer from './Footer'

const WithHeaderWrapper = ({ children }) => {
    return (
        <>
            <Header />
            <div id="smooth-wrapper">
                <div id="smooth-content">{children}</div>
            </div>
            <Footer />
        </>
    )
}

export default WithHeaderWrapper
