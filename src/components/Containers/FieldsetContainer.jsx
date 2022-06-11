import styled from '@emotion/styled'
import { theme } from '../../styles/theme';

const StyledFieldset = styled.fieldset(props => ({
        display: 'flex',
        maxWidth:'30%',
        flexDirection: props.column && 'column',
        flexWrap:'wrap',
        justifyContent:'space-between',
        padding: 10,
        border:'none',
        
        '& legend': {
        textAlign:'center',
        color: theme.colors.text.light,
        fontSize: '1.5rem',
        }
        })) 

export const FieldsetContainer =({children, legend})=>{
    return(
        <StyledFieldset>
            <legend>{legend}</legend>
            {children}
        </StyledFieldset>
    )
}
