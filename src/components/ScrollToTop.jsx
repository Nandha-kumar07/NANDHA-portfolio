import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ScrollButton 
      onClick={scrollToTop}
      isVisible={isVisible}
    >
      <FaArrowUp />
    </ScrollButton>
  );
};

const ScrollButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  border: none;
  z-index: 1000;

  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: translateY(-5px);
  }
`;

export default ScrollToTop;