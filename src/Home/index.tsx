import { Container, Image } from "./styles";
import Banner from '../assets/cryptogado-banner.png';
import Modal from "../components/Modal";
import Header from "../components/Header";

function Home(){
    return (
        <Container>
            <Image src={Banner} alt="banner"/>
            <Modal/>
            <Header/>
        </Container>
    )
}
export default Home;