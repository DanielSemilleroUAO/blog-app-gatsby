import React from 'react'
import { Content, Wrapper, WrapperBGImage } from './BGImage.styles'
// Styles

const BGImage = ({ fluid, title, className, children }) => {
    return (
        <Wrapper>
            <WrapperBGImage title={title} fluid={fluid} />
            <Content className={className}>{children}</Content>
        </Wrapper>
    )
}

export default BGImage