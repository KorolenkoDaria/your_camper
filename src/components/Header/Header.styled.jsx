
import { styled } from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
    height: 75px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid rgba(16, 24, 40, 0.2);
`
export const StyledNav = styled.nav`
    
`
export const StyledUl = styled.ul`
    height: 75px;
    display: flex;
    gap: 20px;
    align-items: center;
`
export const StyledLi = styled.li`

`
export const StyledNavLink = styled(NavLink)`
    color:#101828;
    font-weight: 600;
    padding: 8px 12px;
    transition: background-color 0.3s ease;
    &:hover{
        color: #e44848;
    }
    &.active{
      color: #e44848;
    }
`
