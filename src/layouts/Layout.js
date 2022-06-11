// Requirements
import React from 'react'

// Components
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'
import Button from '../components/Button/Button';
// Prop-Types
import { node } from 'prop-types';


import { ThemeProvider } from '@emotion/react'
import { theme } from '../styles/theme'


// Standard Page Layout
const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={ theme }>
            <Nav classNames={ '' } />
            <main>
                { children }
            </main>
            <Footer />
        </ThemeProvider>

    )
}

Layout.propTypes = {
    children: node.isRequired
}

export default Layout