import { Container } from "./styles";
import Gado from '../../assets/gado.png';
import { connect } from "../../service/Web3Service";
import { useState } from "react";

function Header(){
    const [address, setAddress] = useState<string>();
    async function handleConnect(){
        try{
            await connect().then(a => setAddress(`${a}`)).catch()
        }
        catch(err: any){
            return err
        }
    }
return (
    <Container onClick={handleConnect}>
        {
            address ? address : (   <p id="p">Connect Wallet <img id="meta" src={Gado} alt="logo"/></p>)
        }
        
     
    </Container>
)
}

export default Header;