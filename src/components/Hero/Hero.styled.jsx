import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
    margin-top: 75px;

`

export const HerroWrapper = styled.div`
    padding: 160px 0 160px 0;
`

export const MainTitle = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 65px;
    margin-bottom: 140px;
`

export const Subtitle = styled.p`
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 60px;
`

export const WrapperBtn = styled.div`
    width: 195px;
    margin: 0 auto;
`
export const StyledNavLink = styled(NavLink)`
    background: #e44848;
    border-radius: 200px;
    border: none;
    padding: 16px 50px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.01em;
    color: #fff;
    transition: background 0.3s ease-in-out; 
    &:hover {
        background: #d84343;
    }
`



