import styled from "styled-components";
import imgs from '../../assets/monitor.png'


export const DivBody2 = styled.div`
    display: inline-block;
    margin-top: 100px;
    align-items: center;
    text-align: center;
    width: 33%;
    height: 20vw;
`
export const Myimg = styled.img`
   width: 12%;
   height: auto;
`
Myimg.defaultProps = {
    src: imgs
}

export const DivColor = styled.div`
    background-color:aliceblue;
`

export const TituloColor = styled.h1`
    color: white;
    font-size: 3rem;
`

export const TituloColor1 = styled.h1`
    color: white;
    font-size: 3rem;
`