import styled, { keyframes } from 'styled-components';

const showBackdrop = keyframes`
0% {
  opacity: 0;
}

100% {
opacity: 1;
}`;

const showModal = keyframes`
0% {
  opacity: 0;
  transform: translateY(-200px);
}

100% {
  opacity: 1;
transform: translateY(0px);
}
`

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 40px;

  overflow-y: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  animation: ${showBackdrop} 0.5s ease-out;
`;
