import styled from '@emotion/styled'
import { theme } from '../../styles/theme';

export const Container = styled.div(props => ({
        display: 'flex',
        flexDirection: props.column && 'column',
        justifyContent:'space-around',
        }))



