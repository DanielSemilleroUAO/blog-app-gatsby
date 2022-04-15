import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
// Components
import Header from 'components/Header'
// Styles
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles'
import useMetaDataQuery from 'hooks/useMetaDataQuery'
import { ModeContext } from '../../context/ModeProvider'

const Layout = ({ children }) => {
    const [darkMode] = useContext(ModeContext)
    const data = useMetaDataQuery();
    console.log(data)
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Header siteTitle={data.title} />
            {children}
        </ThemeProvider>
    )
}

export default Layout