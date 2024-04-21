import { Section, HerroWrapper, MainTitle, Subtitle, WrapperBtn, StyledNavLink } from "./Hero.styled";

const Hero = () => {
    return (
        <Section>
            <HerroWrapper>
                <MainTitle>Welcome to< br />
                    camper rental website!</MainTitle>
                <Subtitle>

                    Embark on an unforgettable journey with comfort and freedom.< br />
                    Choose your perfect camper and discover new horizons!
                </Subtitle>
                <WrapperBtn>
                    <StyledNavLink to='/catalog'>Get started</StyledNavLink>
                </WrapperBtn>

            </HerroWrapper>
        </Section>
    )
}

export default Hero;