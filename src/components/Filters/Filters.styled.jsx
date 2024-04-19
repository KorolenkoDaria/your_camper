import styled, { css } from "styled-components";

export const TitleEl = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #475467;
    margin-bottom: 14px;
`
export const SubTitleEl = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    color: #101828;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(16, 24, 40, 0.1);
    margin-bottom: 24px;
`
export const FiltersListEquipment = styled.ul`
    width: 360px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 32px;
`
export const FiltersListType = styled.ul`
    width: 360px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 64px;
`
export const FiltersItem = styled.li`

`

export const InputEl = styled.input`
    display: none;
`
export const LabelEl = styled.label`
display: flex;
gap: 8px;
flex-direction: column;
border: 1px solid rgba(16, 24, 40, 0.2);
border-radius: 10px;
align-items: center;
justify-content: center;
width: 113px;
height: 95px;
font-weight: 500;
font-size: 16px;
line-height: 1.25;
text-align: center;
color: #101828;

${({ checked }) =>
        checked &&
        css`
            border-color: #E44848; /* Измените цвет рамки для checked состояния */
        `}
`

