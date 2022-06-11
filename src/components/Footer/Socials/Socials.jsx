import React from 'react';
import { theme } from '../../../styles/theme';
import { jsx, css, keyframes } from '@emotion/react';

import { FieldsetContainer } from '../../Containers/FieldsetContainer';


const Socials =({ hexWidth, hexBorderWidth, fontSize, arrOfIcons})=>{
    // Calculates height of hex based on width (hexWidth * 0.866)
    const hexHeight = hexWidth * 0.866

    // Styling
    const hexBorder = {
        color: theme.colors.text.light,
        display: 'block',
        position: 'relative',
        margin: theme.spacing.margin.small,
        width:  hexWidth,
        height: hexHeight ,
        backgroundColor:  theme.colors.text.light,
        boxSizing: 'border-box',
        webkitClipPath: 'polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%)',
        mozClipPath: 'polygon(0% 0%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%)'
    }

    const hexBackground = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        position: 'absolute',
        color:'inherit',
        backgroundColor: `${theme.colors.bg.dark}`, /*color of the main-background*/
        top: hexBorderWidth, /* equal to border thickness */
        left: hexBorderWidth, /* equal to border thickness */
        width: hexWidth - (hexBorderWidth * 2), /* container width - (border thickness * 2) */
        height: hexHeight - (hexBorderWidth * 2), /* container height - (border thickness * 2) */
        webkitClipPath: 'polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%)',
        mozClipPath: 'polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%)',
    }

    const hexIcon={
        color: 'inherit',
        fontSize: fontSize,
        margin:'0 auto'
    }
    
    // Animation
    const bounce = keyframes`
        from, 20%, 60%, to {
            transform: scale(1.35);
        }
        40%, 80%{
             transform: scale(.85);
        }
      
    `
    const hexHover = css`
        // Animate the size, inside
        :hover {
            background-color: ${theme.colors.bg.cta} !important;
            animation: ${bounce} 2.5s ease infinite;
            color:${theme.colors.bg.cta} !important;
        };
    `

    return(
    <>
        <FieldsetContainer legend='Follow'>
            {
            arrOfIcons.map(icon=>{
              return(  
              <a href={icon.url}>
                <div  style={hexBorder} css={hexHover} title={icon.name}>
                    <div style={hexBackground} >
                        <i className={icon.icon} style={hexIcon}></i>
                    </div>
                </div>
                </a>
              )  
            }) 
            }
        </FieldsetContainer>
    </>
    )


}

export default Socials