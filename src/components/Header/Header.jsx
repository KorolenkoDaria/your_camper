import Container from "../Container/Container";
import { StyledHeader, StyledNav, StyledUl, StyledLi, StyledNavLink } from "./Header.styled";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledNav>
                    <StyledUl>
                        <StyledLi>
                            <StyledNavLink to='/'>Home</StyledNavLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledNavLink to='/catalog'>Catalog</StyledNavLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledNavLink to='/favorite'>Favorite</StyledNavLink>
                        </StyledLi>
                    </StyledUl>
                </StyledNav>
            </Container>
        </StyledHeader>
    )
}

export default Header;