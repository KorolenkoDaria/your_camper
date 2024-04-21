import { styled } from "styled-components";

export const CatalogWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`

export const ListStyle = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 50px;
`

export const ButtonEl = styled.button`
    border: 1px solid rgba(71, 84, 103, 0.2);
    background-color:#fff;
    border-radius: 200px;
    padding: 16px 32px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.01em;
    color: #101828;
    transition: border 0.3s ease-in-out; 
    &:hover {
        border: 1px solid #e44848;
    }
`

