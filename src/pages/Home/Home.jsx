import Hero from "../../components/Hero/Hero";
import Container from "../../components/Container/Container";

import { Background } from './Home.styled'


const Home = () => {
    return (
        <Background>
            <Container>
                <Hero></Hero>
            </Container>
        </Background>
    )
}
export default Home;    