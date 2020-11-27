import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;

    @media (min-width: 992px){
        margin-top: 15rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        text-align: right;
        margin-top: 2rem;
        color: #666;
    }
`;

const Frase = ({frase}) => {
    return (
        <Contenedor>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </Contenedor>
     );
}
 
export default Frase;