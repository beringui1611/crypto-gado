import styled from "styled-components";

export const Container = styled.div`
background-color:#000;
width:100vw;
height:100vh;
display: flex;
align-items: center;
flex-direction: column;
position: fixed;
`

export const Image = styled.img`
margin-top:100px;
width:500px;
@media screen and (max-width: 700px) {
    width:300px;
}

`