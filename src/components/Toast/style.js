import styled, { keyframes } from "styled-components";

export const StToastList = styled.div`
  left: 50%;
  bottom: 0;
  position: fixed;
  z-index: 1000;
  display: flex; /* Flex 컨테이너 설정 */
  justify-content: center; /* 가로 방향으로 중앙 정렬 */
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const StToastItem = styled.span`
  /* display: inline-flex; */
  padding: 2px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  bottom: ${({ $bottom }) => $bottom ?? 26}px;
  animation: 0.3s forwards
    ${({ $isClosing }) => ($isClosing ? fadeOut : fadeIn)};
  border-radius: 4px;
  background: var(--background-bg-dim, rgba(0, 0, 0, 0.3));
  width: 180px;
  /* height: 26px; */
  font-size: 14px;
  color: white;
`;
