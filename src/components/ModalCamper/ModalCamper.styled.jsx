import styled, { keyframes } from 'styled-components';

const showBackdrop = keyframes`
0% {
  opacity: 0;
}

100% {
opacity: 1;
}`;
/* 
const showModal = keyframes`
0% {
  opacity: 0;
  transform: translateY(-200px);
}

100% {
  opacity: 1;
transform: translateY(0px);
}
` */

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 40px;
/*   overflow-y: scroll; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgba(17, 18, 19, 0.4);
  animation: ${showBackdrop} 0.5s ease-out;
`

export const ModalEl = styled.div`
    position: relative;
    border-radius: 20px;
    padding: 40px;
    width: 982px;
    background: #fff;

`

export const Title = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
  margin-bottom: 10px;
`
export const RatingEl = styled.p`
  text-decoration: underline;
  text-decoration-skip-ink: none;
`
export const LocationEl = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`
export const PriceEl = styled.p`
font-weight: 600;
font-size: 24px;
line-height: 1.25;
color: #101828;
margin-bottom: 24px;
`
export const WrapperLoc = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`
export const ContentWrapper = styled.div`
  max-height: 410px;
  overflow: auto;
  margin-bottom: 44px;
`
export const GalleryItem = styled.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
export const GalleryWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`
export const GalleryImg = styled.img`
  display: block;
  width: auto;
  height: 100%;
  object-fit: cover;
`
export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
`
export const ButtonEl = styled.button`
    position: absolute;
    top: 40px;
    right: 40px;
    background-color: inherit;
    border: none;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    padding: 0;
`

export const Tab = styled.button`
  position: relative; 
  border: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  background-color: inherit;
  cursor: pointer;
  padding: 8px 16px;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    height: 6px;
    background-color: ${props => props.active ? '#e44848' : 'inherit'};
    opacity: ${props => props.active ? '1' : '0'}; /* Показываем или скрываем */
    transition: opacity 0.3s ease-in-out; /* Анимация перехода */
  }
`


export const TabWrapper = styled.div`
    margin-bottom: 24px;
`


