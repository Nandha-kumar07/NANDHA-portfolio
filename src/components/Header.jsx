import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Header = ({ darkMode, setDarkMode }) => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const navLinks = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Experience', link: '#experience' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <Nav scroll={scroll}>
      <Logo href="#home">
        <span>{"<"}</span>Portfolio<span>{"/>"}</span>
      </Logo>

      <NavLinks mobileMenu={mobileMenu}>
        {navLinks.map((link, i) => (
          <li key={i}>
            <NavLink
              href={link.link}
              onClick={() => setMobileMenu(false)}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <ThemeToggle
          onClick={() => setDarkMode(!darkMode)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </NavLinks>

      <MobileMenuBtn onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? <FaTimes /> : <FaBars />}
      </MobileMenuBtn>
    </Nav>
  );
};

const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: ${({ scroll, theme }) => scroll ? theme.bgLight : 'transparent'};
  backdrop-filter: ${({ scroll }) => scroll ? 'blur(10px)' : 'none'};
  box-shadow: ${({ scroll }) => scroll ? '0 5px 30px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem 5%;
  }
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ mobileMenu }) => mobileMenu ? '0' : '-100%'};
    width: 80%;
    height: 100vh;
    background: ${({ theme }) => theme.bgLight};
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    transition: all 0.5s ease;
    z-index: 999;
  }
`;

const NavLink = styled(motion.a)`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggle = styled(motion.div)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(30deg);
  }
`;

const MobileMenuBtn = styled.div`
  display: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;