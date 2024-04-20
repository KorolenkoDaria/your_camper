import { styled } from "styled-components";

export const Item = styled.li`
    display:flex;
    gap: 24px;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 20px;
    padding: 24px;
    width: 888px;
`
export const ImgWrapper = styled.div`
    border-radius: 10px;
    width: 290px;
    height: 310px;
    overflow: hidden;
    display: flex;
    justify-content: center;
`
export const ImgEl = styled.img`
    display: block;
    width: auto;
    height: 100%;
    object-fit: cover;
`
export const Properties = styled.div`
    width: 526px;
    max-width: 526px;
`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
    color: #101828;
    width: 526px;
    margin-bottom: 8px;
`
export const Title = styled.p`

`
export const PriceEl = styled.p`
    display: flex;
    gap: 10px;
    align-items: center;
`
export const ButtonHeart = styled.button`
    background-color: inherit;
    border: none;
    width: 24px;
    height: 22px;
    display: flex;
    align-items: center;
    padding: 0;
`

export const LocationWrapper = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #101828;
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
`
export const RatingEl = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    text-decoration: underline;
    text-decoration-skip-ink: none;
`
export const LocationEl = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`
export const DescriptionEl = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #475467;
    max-width: 525px;
    max-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 24px;
`
export const DetailsList = styled.ul`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 24px;
`
export const DetailsItem = styled.li`
    display: flex;
    gap: 8px;
    align-items: center;
    background: #f2f4f7;
    border-radius: 100px;
    padding: 12px 18px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    color: #101828;
`