import { styled } from "styled-components";

import pointSVG from "../../assets/icons/point_grey.svg";

export const Field = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 32px;
    ::before {
            content: "";
            position: absolute;
            left: 18px; 
            bottom: 12px;
            transform: translateY(-50%);
            width: 16px; 
            height: 16px; 
            background-image: url(${pointSVG}); 
            background-size: contain; 
            background-repeat: no-repeat; 
        }
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
    padding: 18px 18px 18px 44px;
    width: 360px;
    height: 56px;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #101828;
    outline: none; 
        ::placeholder {
            position: relative;
            padding-left: 24px; 
            font-weight: 400;
            font-size: 16px;
            line-height: 1.25;
            color: rgba(16, 24, 40, 0.6);
        }

`