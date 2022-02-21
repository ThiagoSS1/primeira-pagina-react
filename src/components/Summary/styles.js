import styled from "styled-components";
import imgJs from '../../assets/javascript.png';
import js2 from '../../assets/js2.png';
import js1 from '../../assets/js1.png';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
`;

export const Container1 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    background-image: url(${imgJs});
    height: 25vw;
`;

export const Container2 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    background-image: url(${js2});
    height: 25vw;
`;

export const Container3 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    background-image: url(${js1});
    height: 25vw;
`;


export const TituloH3 = styled.h3`
    font-size: 1.8rem;
    padding: 1rem 5rem;
    
`;

export const Texto = styled.p`
    padding: 1rem 5rem;
`