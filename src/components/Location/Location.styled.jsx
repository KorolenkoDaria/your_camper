import { styled } from "styled-components";

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 32px;
`
export const LabelElement = styled.label`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: rgba(16, 24, 40, 0.6);
`
export const InputElement = styled.input`
    background: #f7f7f7;
    border-radius: 10px;
    padding: 18px 18px 18px 18px;
    width: 360px;
    height: 56px;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #101828;
    outline: none; 
        ::placeholder {
            font-weight: 400;
            font-size: 16px;
            line-height: 1.25;
            color: rgba(16, 24, 40, 0.6);
        }
        &:focus {
            border-color:#18a287; 
        }
`