import React from 'react'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'

const Wrapper = ({ children }) => {
    return (
        <HelmetProvider>
            {children}
        </HelmetProvider>
    )
}

const customerRender = (ui, options) => render(ui, { wrapper: Wrapper, ...options })

export { customerRender as render }