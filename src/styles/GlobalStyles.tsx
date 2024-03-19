import { createGlobalStyle } from "styled-components"; 
import Gado from '../assets/gado.png';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    text-decoration: none;

    cursor:url(${Gado}), default;
   
 

    
}   
`



