import styled, { keyframes } from "styled-components";

// Keyframes for the animation
const fade458 = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.25;
  }
`;

// Styled Loader component
const Loader = styled.div`
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 10px;
`;

const Bar = styled.div`
  width: 8%;
  height: 24%;
  background: rgb(128, 128, 128);
  position: absolute;
  left: 50%;
  top: 30%;
  opacity: 0;
  border-radius: 50px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  animation: ${fade458} 1s linear infinite;
  transform: rotate(${(props) => props.rotate}deg) translate(0, -130%);
  animation-delay: ${(props) => props.delay}s;
`;

// Loader Component
const LoadingSpinner = () => {
  const bars = Array.from({ length: 12 }).map((_, index) => (
    <Bar key={index} rotate={index * 30} delay={-1 + index * -0.1} />
  ));

  return <Loader>{bars}</Loader>;
};

export default LoadingSpinner;
