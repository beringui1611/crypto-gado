import styled from "styled-components";


export const Container = styled.div`
width:40vw;
height:60vh;
background-color:#ffff;
border-radius:20px;
margin-top:100px;

#paragraph{
    font-size:30px;
    color:#c68328;
}

#div-one{
 display: flex;
 flex-direction: column;
  align-items: flex-start;
  margin-top:20px;
  margin-left:20px;

}

#box-two{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:200px;
  justify-content: center;

  button{
    width:400px;
    height:40px;
    background-color:#000;
    border: none;
    border-radius:12px;
    color:#ffff;
    font-size:20px;
    cursor:pointer;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    margin-top:80px;
  }
}

#BNB{
    height:40px;
    font-size:30px;
    background-color:transparent;
    border:none;
    padding-left:250px;
    color:#000;
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    &:hover{
        overflow-y: hidden;
    }
    &:focus{
        color: #000;
        font-size: 30px;
        font-weight: 400;
        outline:none;
        
    }
    &::placeholder{
        color: #000;
        font-size: 30px;
        font-weight: 400;
        padding-top: 10px;
        
    }
}


#bnb{
    width:20px;
}

#new-bnb{
 width:50px;
 margin-bottom:10px;
 margin-left:10px;
}

#div-trhee{
    display: flex;
    align-items: center;
    flex-direction: column;
}

#radios{
    position: absolute;
    margin-top:50px;
    margin-left:14.5vw;
    gap:10px;
    display: flex;
    cursor: pointer;
    z-index:10;
    cursor: pointer;

}

.btn-class{
    width:100px;
    height:20px;
    border-radius:2px;
    border: none;
    background-color: #000;
    color:#ffff;
    font-weight:700;
    cursor: pointer;
}

#leader{
 display: flex;
 justify-content: center;
 gap:200px;
 margin-top:10px;
 margin-bottom:400px;
   
}

.p-lead{
    color:#000;
    padding-top:10px;
    font-weight:700;
}

#gado{
    width:30px;
    height:30px;
}

#user{
    color:#000;
    font-size:10px;
    position: absolute;
    margin-top:5px;
    margin-left:-10px;
  

}

#top{
    width:20px;
    position: absolute;
    margin-top:31px;
    margin-left:-30px;
}

#amount{
    display: flex;
    flex-direction: column;
}


#users-box{
}

@media screen and (max-width: 700px) {
    width: 30vh;
}

`
